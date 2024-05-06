function populateFromLocalStorage() {
    const items = localStorage.getItem("items");
    if (items) {
        itemList = JSON.parse(items);
        const galleryContainer = document.querySelector("#gallery .carousel-inner");
        
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
           
            
            // create a new carousel item
            let carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");

            // first item is active
            if (i === 0) {
                carouselItem.classList.add("active");
            }
            
            // create image
            let newGIF = document.createElement("img");
            newGIF.src = item[2];
            newGIF.alt = item[0];
            newGIF.classList.add("d-block", "w-100");
            
            // append image to carousel
            carouselItem.appendChild(newGIF);
            
            // caption element
            let caption = document.createElement("div");
            caption.classList.add("carousel-caption", "text-center");
            caption.innerHTML = `<h5>${item[0]}</h5>`; // Assuming item[0] contains the caption
            
            // add caption
            carouselItem.appendChild(caption);
            
            // add carousel item to carousel container
            galleryContainer.appendChild(carouselItem);
        }
        
    } else {
        // If no items found in localStorage, display a message
        let missingNote = document.createElement("div");
        missingNote.classList.add("carousel-item", "active");
        missingNote.innerHTML = `<div class="carousel-caption"><p class="text-center">Search in Home to see some GIFs!</p></div>`;
        document.getElementById("gallery").appendChild(missingNote);
    }
}

populateFromLocalStorage();
