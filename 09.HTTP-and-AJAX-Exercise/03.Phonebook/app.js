function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContactBook);
    document.getElementById('btnCreate').addEventListener('click', createContact);

}

attachEvents();

async function loadContactBook() {
    let contacts = await getAllContacts()
    let phonebook = document.getElementById('phonebook');
    phonebook.replaceChildren()

    for (let [key, contact] of Object.entries(contacts)) {

        let li = document.createElement('li');
        li.append(`${contact.person}: ${contact.phone}`)

        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', () => deleteEntry(key, li))

        li.appendChild(delBtn);
        phonebook.appendChild(li)
    }
}

async function createContact() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    const person = personInput.value;
    const phone = phoneInput.value;

    if (!person || !phone) {
        alert('Both fields are required.');
        return;
    }

    const record = { person, phone };

    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record),
        };

        const response = await fetch('http://localhost:3030/jsonstore/phonebook', options);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        personInput.value = '';
        phoneInput.value = '';

        loadContactBook();
    } catch (error) {
        alert(`Failed to create contact: ${error.message}`);
    }
}

async function getAllContacts() {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return data;
}

async function deleteEntry(key, liElement) {
    const res = await fetch('http://localhost:3030/jsonstore/phonebook/' + key, { method: 'DELETE' });

    if (res.ok) {
        liElement.remove();
    } else {
        alert('Failed to delete entry.');
    }
}

