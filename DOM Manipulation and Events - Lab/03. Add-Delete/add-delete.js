function addItem() {
    let element = document.getElementById('newItemText');
    let listItems = document.getElementById("items");
    let newListItem = document.createElement('li');
    if (element.value) {
        newListItem.textContent = element.value;
        listItems.appendChild(newListItem);
    }
    
    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', onDelete);

    newListItem.appendChild(deleteBtn);

    function onDelete(e) {
        let item = e.target.parentElement;
        item.remove();
    }

}