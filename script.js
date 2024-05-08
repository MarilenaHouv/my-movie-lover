// List of ratings for gif selection
const ratings = ['g', 'pg', 'pg-13', 'r', 'Any']

// let gifapi = "7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4";
// Get inputted text from user, query API for movie information.
async function submit(){
    let susaudio = document.getElementById("suspense");
    susaudio.play();
    let x = document.getElementById("userinput").value;
    document.getElementById("userinput").value = '';
    if (x == ""){
        alert("Invalid, type a movie name");
        return false;
    }

    
    //get movie rating
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 16e8ab249fe9f83e43bde992793f46ed'
        }
      };
      //https://api.themoviedb.org/3/search/movie?api_key=16e8ab249fe9f83e43bde992793f46ed&query=${shrek}&language=en-US
      let movieresp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=16e8ab249fe9f83e43bde992793f46ed&query=${x}&language=en-US`, options);
      let mrespjson = await movieresp.json();
      let title = mrespjson.results[0].title;
      let posterurl = mrespjson.results[0].poster_path? `https://image.tmdb.org/t/p/w500/${mrespjson.results[0].poster_path}`: `/images/notavailable.jpg`;

      let rating = Math.round(mrespjson.results[0].vote_average);
      document.getElementById("speechbubble").innerHTML = "You chose the movie " + title.bold() +". I give it a rating of " + rating + "/10!!!<b> ";
    
      //make itt so we fetch a review with the same rating as the average, rn its just the first review? idk

      //get gif
      // Get based on movie search result instead of user input
      let gifresp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${title}&api_key=7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4&limit=5&rating=pg`);
      let respjson = await gifresp.json();
      document.getElementById("gifimg").src = respjson.data[0].images.original.url;   

      // Leo: this throws an error if content is undefined

      let reviewresp = await fetch(`https://api.themoviedb.org/3/movie/${mrespjson.results[0].id}/reviews?api_key=16e8ab249fe9f83e43bde992793f46ed&query=${x}&language=en-US`, options);
      //https://api.themoviedb.org/3/movie/12345/reviews?api_key=16e8ab249fe9f83e43bde992793f46ed&query=incredible&language=en-US`, options);

      rrespjson = await reviewresp.json();
      let review = "";
      //If there is at least 1 review
      if (rrespjson.results[0]) {
        review = rrespjson.results[0].content;
      }
    //   for (let i=0; i<rrespjson.results.length;i++) {
    //     // Check if the review's rating matches the movie's rating
    //     let reviewRating = rrespjson.results[i].author_details.rating ?? null; // Assuming there's a field named 'rating' in the review data
    //     console.log("r"+rating);
    //     console.log("rr"+reviewRating);
    //     if (reviewRating == rating) {
    //         // Save this review
    //         review = rrespjson.results[i].content;
    //         console.log(reviewRating);
    //         console.log(rating);
    //     }
    // }
      document.getElementById("speechbubble").innerHTML += review;
      save_data(title, posterurl, respjson.data[0].images.original.url);
      update_mood(rating);
}

// Save movie search history to local storage
// 
// DATA:
// [title, poster URL, gifURL]
//
async function save_data(title, posterURL, gifURL) {
  let data = [title, posterURL, gifURL, false]
  localStorage.setItem('items', JSON.stringify([...JSON.parse(localStorage.getItem('items') ?? '[]'), data]));
}



// Update movie lover image based on rating
function update_mood(rating) {
  let result = "idle";
  switch (rating) {
    case 0:
    case 1:
      result = "awful";
      break;
    case 2:
      result = "bad";
      break;
    case 3:
    case 4:
      result = "low";
      break;
    case 5:
    case 6:
      result = "mid";
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      result = "good";
      break;

  }

  document.getElementById("movielover").src = "images/guy_art/guy_" + result + ".gif";
  
}

//fuction for thank you message when submittin contact form
function thankmessage(){
  document.getElementById("contactform").reset();
  alert("Your form has been submitted, thank you for sending us a message!");
}


// //sound effect?
// const audio = new Audio("sound/bloop.mp3");
// const buttons = document.querySelectorAll('*');

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });



