function addItem() {
    let element = document.getElementById('newItemText');
    let listItems = document.getElementById("items");
    let newListItem = document.createElement('li');
    if (element.value) {
        newListItem.textContent = element.value;
        listItems.appendChild(newListItem);
    }
}