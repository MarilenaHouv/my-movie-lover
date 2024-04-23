// let gifapi = "7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4";
async function submit(){
    console.log("hey");
    alert("WORK");
    let x = document.getElementById("userinput").value;
    if (x == ""){
        alert("Invalid, type a movie name");
        return false;
    }
    
    let gifresp = await fetch(`http://api.giphy.com/v1/gifs/search?q=${x}&api_key=7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4&limit=5&rating=pg`);
    let respjson = await gifresp.json();
    // let datar = JSON.stringify(respjson);
    //  console.log(datar.data[0].images.original.url);
    document.getElementById("gifimg").src = respjson.data[0].images.original.url;

}

