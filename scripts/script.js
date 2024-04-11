// let gifapi = "7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4";
function submit(){
    console.log("hey");
    alert("WORK");
    let x = document.getElementById("userinput");

    if (x == ""){
        alert("Type movie");
        return false;
    }
    // let query = "name=" + nameInput.value + "&" + "age=" + age.value; 
    // let resp = await fetch("https://echo.zuplo.io/api?" + query);
    // let respJSON = await resp.json();

    // let data = JSON.stringify(respJSON, null, 2);
    // output.textContent = data;
    let xhr = $.get("http://api.giphy.com/v1/gifs/search?q={x}&api_key=7FcrCZUTeZ4HSqxtoMcCVZlHiUnw2iz4&limit=5&rating=pg");
    xhr.done(function(data) { console.log("success got data", data); });

}

