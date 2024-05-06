const historyList = document.getElementById("historyList");
const itemTemplate = document.getElementById("searchitem")

document.getElementById('export').addEventListener('click', exportClick)
document.getElementById('import-form').addEventListener('submit', onImport)
document.getElementById('clear').addEventListener('click', clearClick)

// Get local storage data and put it in the history list.
function populateFromLocalStorage() {
    const items = localStorage.getItem("items");
    if (items) {
        itemList = JSON.parse(items);
        for (let i = 0; i < itemList.length; i++) {
            let item = itemList[i];
            let newLi = itemTemplate.content.cloneNode(true);

            newLi.querySelector("#title").textContent = item[0];
            newLi.querySelector("#gifimg").src = item[1];
            let deleteBtn = newLi.querySelector("#delete");
            let favbtn = newLi.querySelector("#favorite");

            deleteBtn.addEventListener("click", function() {
                console.log(i);
                itemList.splice(i, 1);
                console.log(itemList);
                localStorage.setItem("items", JSON.stringify(itemList));
                
                location.reload();
                
            })

            favbtn.addEventListener("click", function(event){
                let favicon = event.currentTarget.querySelector(".material-icons");
                if (favicon.style.color === "red") {
                    favicon.style.color = "";
                    itemList[i][3]= false;
                } else {
                    favicon.style.color = "red";
                    itemList[i][3] = true;
                }
                console.log(itemList[i]);
            })

            historyList.append(newLi);
        }
        
    } else {
        let missingNote = document.createElement("p");
        missingNote.textContent = "Search a movie in Home, or import history from a file!";
        historyList.appendChild(missingNote);
    }
}

// Export search history as blob
function exportClick(ev) {
    let items = JSON.parse(localStorage.getItem('items'));
    let itemsString = JSON.stringify(items);
    let download = new Blob([itemsString], { type: "application/json" });
    let blobURL = new URLSearchParams();

    blobURL = URL.createObjectURL(download);

    newLink = document.createElement("a");
    newLink.href = blobURL;
    newLink.download = "movielover.json";
    document.getElementById("downloads").appendChild(newLink);
    newLink.click();
}

// Import a file and set local storage to its contents (if possible)
async function onImport(ev) {
    ev.preventDefault();
    console.log('import form was submitted');
    const importField = document.getElementById('import-file');

    let files = importField.files
    if (files.length < 1) {
        alert("Please select at least one file.");
    } else {
        let thatFile = files[0];
        let contents = await thatFile.text();

        localStorage.setItem("items", contents);
        populateFromLocalStorage();

    }
}

function clearClick(ev) {
    localStorage.clear();
    location.reload();
}

populateFromLocalStorage()