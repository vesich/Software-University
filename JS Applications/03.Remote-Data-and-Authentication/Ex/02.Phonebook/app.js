function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts)
    document.getElementById('btnCreate').addEventListener('click', createContact);
}

attachEvents();

async function loadContacts() {
    const ulElement = document.getElementById('phonebook');
    ulElement.innerHTML = ''
    const response = await fetch("http://localhost:3030/jsonstore/phonebook");
    const data = await response.json();
    Object.values(data).map(createLi).forEach(one => ulElement.appendChild(one))
}

function createLi(obj) {
    const result = document.createElement('li');
    result.textContent = `${obj.person}: ${obj.phone}`
    result.id = obj._id;
    const button = document.createElement("button")
    button.textContent = "Delete";
    button.addEventListener('click', deleteContact)
    result.appendChild(button);
    return result;
}

async function deleteContact(ev) {

    const id = ev.target.parentNode.id
    const response = await fetch("http://localhost:3030/jsonstore/phonebook/" + id, {
        method: 'delete'
    })
    await response.json();
    loadContacts();
}

async function createContact() {

    let person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;
    person = person[0].toUpperCase()  + person.slice(1).toLowerCase()

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

    const response = await fetch("http://localhost:3030/jsonstore/phonebook", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, phone })
    })
    await response.json();
    loadContacts();
}