// Settings script

let ageRating = 1;

document.getElementById('increaseRating').addEventListener('click', setRating(1))

// Get settings from local storage
function settingsFromLocalStorage() {
    const settingsJSON = localStorage.getItem("settings");
    const settings = JSON.parse(settingsJSON);
}

// Set age rating for gifs from 0 - 4
function setRating(amount = 0) {
    ageRating = Math.min(Math.max(this, 0), 4);
}

// Toggle if reviews are displayed
function toggleReviews() {
    
}