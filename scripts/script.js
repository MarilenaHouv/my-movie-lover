// let gifapi = "7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4";
async function submit(){
    document.getElementById("movielover").src = "images/ikdkman.gif";
    let x = document.getElementById("userinput").value;
    if (x == ""){
        alert("Invalid, type a movie name");
        return false;
    }
    //get gif
    let gifresp = await fetch(`http://api.giphy.com/v1/gifs/search?q=${x}&api_key=7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4&limit=5&rating=pg`);
    let respjson = await gifresp.json();
    document.getElementById("gifimg").src = respjson.data[0].images.original.url;   
    
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
      console.log(mrespjson);
    
}

