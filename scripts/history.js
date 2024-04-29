const historyList = document.getElementById("list");

document.getElementById('export').addEventListener('click', exportClick)
document.getElementById('import-form').addEventListener('submit', onImport)
document.getElementById('clear').addEventListener('click', clearClick)

// Get local storage data and put it in the history list.
function populateFromLocalStorage() {
    const items = localStorage.getItem("items");
    if (items) {
        JSON.parse(items).forEach(addItemToList);
}
}

// Add an item to the list of movies
function addItemToList(item) {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    historyList.append(newLi);
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
}

populateFromLocalStorage()