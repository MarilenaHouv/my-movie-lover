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