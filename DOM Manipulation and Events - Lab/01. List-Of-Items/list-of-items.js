function addItem() {
    let element = document.getElementById('newItemText');
    let listItems = document.getElementById("items");
    let newListItem = document.createElement('li');
    newListItem.textContent = element.value;
    listItems.appendChild(newListItem);
}