function populateFromLocalStorage() {
    const items = localStorage.getItem("items");
    if (items) {
        itemList = JSON.parse(items);
        const galleryContainer = document.querySelector("#gallery .carousel-inner");
        let firstitemcount = 0;
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
            console.log(item);
            if(item[3] == true){
                firstitemcount++;
            
                // create a new carousel item
                let carouselItem = document.createElement("div");
                carouselItem.classList.add("carousel-item");
                carouselItem.classList.remove("active");
                
                // first item is active
                if (firstitemcount==1) {
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
                caption.innerHTML = `<h5>${item[0]}</h5>`; 
                
                // add caption
                carouselItem.appendChild(caption);
                
                // add carousel item to carousel container
                galleryContainer.appendChild(carouselItem);
            }
        }
        //if no favorite items use no items picture
        if (firstitemcount === 0) {
            let defaultItem = document.createElement("div");
            defaultItem.classList.add("carousel-item", "active");
            let defaultImage = document.createElement("img");
            defaultImage.src = "images/guy_art/guy_awful.gif";
            defaultImage.classList.add("d-block", "w-50", "mx-auto");
            defaultItem.appendChild(defaultImage);
            let caption = document.createElement("div");
            caption.classList.add("carousel-caption", "text-center");
            caption.innerHTML = "<h5>No Favorite Movies</h5>";
            defaultItem.appendChild(caption);
            galleryContainer.appendChild(defaultItem);
        }
        
    } else {
        let defaultItem = document.createElement("div");
            defaultItem.classList.add("carousel-item", "active");
            let defaultImage = document.createElement("img");
            defaultImage.src = "images/guy_art/guy_awful.gif";
            defaultImage.classList.add("d-block", "w-50", "mx-auto");
            defaultItem.appendChild(defaultImage);
            let caption = document.createElement("div");
            caption.classList.add("carousel-caption", "text-center");
            caption.innerHTML = "<h5>No Favorite Movies</h5>";
            defaultItem.appendChild(caption);
            galleryContainer.appendChild(defaultItem);
    }
}

populateFromLocalStorage();
