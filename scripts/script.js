// List of ratings for gif selection
const ratings = ['g', 'pg', 'pg-13', 'r', 'Any']

// let gifapi = "7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4";
// Get inputted text from user, query API for movie information.
async function submit(){
    document.getElementById("movielover").src = "images/ikdkman.gif";
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
      let rating = Math.round(mrespjson.results[0].vote_average);
      document.getElementById("speechbubble").textContent = "You chose the movie <" + title + ">" +". I give it a rating of " + rating + "/10!!! ";
    
      //make itt so we fetch a review with the same rating as the average, rn its just the first review? idk

      //get gif
      // Get based on movie search result instead of user input
      let gifresp = await fetch(`http://api.giphy.com/v1/gifs/search?q=${title}&api_key=7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4&limit=5&rating=pg`);
      let respjson = await gifresp.json();
      document.getElementById("gifimg").src = respjson.data[0].images.original.url;   

      // Leo: this throws an error if content is undefined

      let reviewresp = await fetch(`https://api.themoviedb.org/3/movie/${mrespjson.results[0].id}/reviews?api_key=16e8ab249fe9f83e43bde992793f46ed&query=${x}&language=en-US`, options);
      rrespjson = await reviewresp.json();
      let review = "";
      // If there is at least 1 review
      if (rrespjson.results[0]) {
        review = rrespjson.results[0].content;
      }
      document.getElementById("speechbubble").textContent += review;
      save_data(title, rating, respjson.data[0].images.original.url);
}

// Save movie search history to local storage
async function save_data(title, rating, gifURL) {
  let data = [title, rating + "/10", gifURL]
  localStorage.setItem('items', JSON.stringify([...JSON.parse(localStorage.getItem('items') ?? '[]'), title]));
}



// Update movie lover image based on rating
function update_mood() {
  
}


// submit form?
async function sendform(){
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

   // Send form data to server
   try {
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fname, lname, email, message })
    });

    if (response.ok) {
        alert('Form submitted successfully');
        // Clear form fields
        document.getElementById("fname").value = '';
        document.getElementById("lname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("message").value = '';
    } else {
        alert('Form submission failed');
    }
} catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the form');
}
  console.log(message);
}


