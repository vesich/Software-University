function attachedEvents() {
    loadLists()
    document.querySelector('form').addEventListener('submit', onSubmit)
}
attachedEvents()

async function onSubmit(event) {
    event.preventDefault()

    if (document.getElementById('1').value == '' ||
        document.getElementById('2').value == '' ||
        document.getElementById('3').value == '' || isNaN(document.getElementById('3').value) ||
        document.getElementById('4').value == '' || isNaN(document.getElementById('4').value)) {
        alert('Incorrect type of inputs or an empty input! Please try again.')
        return
    }
    if (document.getElementById('4').value < 2 || document.getElementById('4').value > 6) {
        alert('The grade you entered is invalid! Please try again.')
        return
    }

    if (document.getElementById('3').value.length !== 11) {
        alert(`The Faculty Number should be 11 digits long! Please try again. This one is ${document.getElementById('3').value.length}`)
        return
    }
    const formData = new FormData(event.target);
    const body = JSON.stringify({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        facultyNumber: formData.get('facultyNumber'),
        grade: formData.get('grade'),
    })

    const response = await fetch(" http://localhost:3030/jsonstore/collections/students", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body
    })

    document.getElementById('1').value = '';
    document.getElementById('2').value = '';
    document.getElementById('3').value = '';
    document.getElementById('4').value = '';
    loadLists()

}

async function loadLists() {
    const tbody = document.querySelector('tbody');
    const response = await fetch("http://localhost:3030/jsonstore/collections/students");
    const data = await response.json();
    tbody.innerHTML = "";

    Object.values(data).map(extractContact).forEach(el => tbody.appendChild(el))
}

function extractContact(contact) {
    let name = contact.firstName
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    let lastName = contact.lastName
    lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
    const result = e('tr', {},
        e('td', {}, name),
        e('td', {}, lastName),
        e('td', {}, Number(contact.facultyNumber)),
        e('td', {}, Number(contact.grade).toFixed(2)));
    return result
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}