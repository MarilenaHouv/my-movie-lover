// // add image to carousel


// const carouselInner = document.getElementsByClassName("carousel-inner");
// const galTemplate = document.getElementById("carouseltemp");
// function getfromStorage(){
//     const items = localStorage.getItem("items");
//         if(items){
//             itemList = JSON.parse(items);
//             for (let i = 0; i < itemList.length; i++) {
//                         let item = itemList[i];
//                         let newItem = galTemplate.content.cloneNode(true);
//                         newItem.querySelector("#galleryimg").src = item[1];
//                         newItem.querySelector("#gallerycaption").textContent = item[0];
//                         carouselInner.append(newItem);

//              }
//         }
// }

// getfromStorage();

// Get local storage data and put it in the history list.
function populateFromLocalStorage() {
    const items = localStorage.getItem("items");
    if (items) {
        itemList = JSON.parse(items);
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
            let newDiv = document.createElement("div");
            let newGIF = document.createElement("img");
            let caption = document.createElement("h4");
            caption.textContent = item[0];
            newGIF.src = item[2];
            newGIF.alt = item[0];
            newDiv.appendChild(newGIF);
            newDiv.appendChild(caption);
            document.getElementById("movieGIFs").appendChild(newDiv);

        }
        
    } else {
        let missingNote = document.createElement("p");
        missingNote.textContent = "Search in Home to see some GIFs!";
        document.getElementById("movieGIFs").appendChild(missingNote);
    }
}

populateFromLocalStorage();