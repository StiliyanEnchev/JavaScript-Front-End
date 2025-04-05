document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let form = document.querySelector('form');
    let menu = document.getElementById('menu');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        newItemValue = document.getElementById('newItemValue');
        newItemText = document.getElementById('newItemText');
        
        let newMenuItem = document.createElement('option');
        newMenuItem.value = newItemValue.value;
        newMenuItem.textContent = newItemText.value;
        menu.appendChild(newMenuItem)
        newItemText.value = '';
        newItemValue.value = '';
    })
}