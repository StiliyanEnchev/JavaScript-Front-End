let nameInput = document.getElementById('name');
let quantityInput = document.getElementById('quantity');
let dateInput = document.getElementById('date');
let orderBtn = document.getElementById('order-btn');
let editBtn = document.getElementById('edit-order');
let loadBtn = document.getElementById('load-orders');
let list = document.getElementById('list');
let currentId = null;
let baseUrl = 'http://localhost:3030/jsonstore/orders/';

loadBtn.addEventListener('click', loadOrders);
orderBtn.addEventListener('click', createOrder);
editBtn.addEventListener('click', editOrder);

function loadOrders() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            list.innerHTML = '';
            Object.values(data).forEach(o => {
                let container = document.createElement('div');
                container.className = 'container';

                let h2 = document.createElement('h2');
                h2.textContent = o.name;

                let h3Date = document.createElement('h3');
                h3Date.textContent = o.date;

                let h3Qty = document.createElement('h3');
                h3Qty.textContent = o.quantity;

                let changeBtn = document.createElement('button');
                changeBtn.className = 'change-btn';
                changeBtn.textContent = 'Change';
                changeBtn.addEventListener('click', () => {
                    nameInput.value = o.name;
                    quantityInput.value = o.quantity;
                    dateInput.value = o.date;
                    currentId = o._id;
                    orderBtn.disabled = true;
                    editBtn.disabled = false;
                    container.remove();
                });

                let doneBtn = document.createElement('button');
                doneBtn.className = 'done-btn';
                doneBtn.textContent = 'Done';
                doneBtn.addEventListener('click', () => {
                    fetch(baseUrl + o._id, { method: 'DELETE' })
                        .then(loadOrders);
                });

                container.append(h2, h3Date, h3Qty, changeBtn, doneBtn);
                list.appendChild(container);
            });
        });
}

function createOrder(e) {
    e.preventDefault();
    let name = nameInput.value;
    let quantity = quantityInput.value;
    let date = dateInput.value;

    if (!name || !quantity || !date) {
        return;
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, quantity, date })
    }).then(() => {
        loadOrders();
        nameInput.value = '';
        quantityInput.value = '';
        dateInput.value = '';
    });
}

function editOrder(e) {
    e.preventDefault();
    if (!currentId) {
        return
    };

    fetch(baseUrl + currentId, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameInput.value,
            quantity: quantityInput.value,
            date: dateInput.value,
            _id: currentId
        })
    }).then(() => {
        loadOrders();
        nameInput.value = '';
        quantityInput.value = '';
        dateInput.value = '';
        orderBtn.disabled = false;
        editBtn.disabled = true;
        currentId = null;
    });
}
