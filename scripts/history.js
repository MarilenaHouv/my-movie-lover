const historylist = document.getElementById("list");

const items = localStorage.getItem("items");
if (items) {
    JSON.parse(items).forEach(addItemToList);
}

function addItemToList(item) {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    historylist.append(newLi);
  }