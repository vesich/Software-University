function attachEvents() {

    document.querySelector('.load').addEventListener('click', loadCatches);
    document.querySelector('#addForm form').addEventListener('submit', onCreateSubmit)
}
attachEvents();

async function updateFunc(event) {

    const catchId = event.target.parentNode.id;
    let id = event.target.parentNode.id;
    const token = sessionStorage.getItem('userToken')

    let divCatch = event.target.parentNode;
    divCatch.querySelector('.angler').disabled = false;
    divCatch.querySelector('.weight').disabled = false;
    divCatch.querySelector('.species').disabled = false;
    divCatch.querySelector('.location').disabled = false;
    divCatch.querySelector('.bait').disabled = false;
    divCatch.querySelector('.captureTime').disabled = false;

    let saveBtn = event.target;
    saveBtn.textContent = 'Save';

    saveBtn.addEventListener('click', async (ev) => {

        let angler = divCatch.querySelector('.angler').value;
        let weight = divCatch.querySelector('.weight').value;
        let species = divCatch.querySelector('.species').value;
        let location = divCatch.querySelector('.location').value;
        let bait = divCatch.querySelector('.bait').value;
        let captureTime = divCatch.querySelector('.captureTime').value;

        if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == '') {
            return alert('All fields are required!')
        } else if (isNaN(weight)) {
            return alert('Weight has to be a number!')
        } else if (isNaN(captureTime)) {
            return alert('Capture time must be a number!')
        }

        let obj = { angler, weight, species, location, bait, captureTime }



        const response = await fetch('http://localhost:3030/data/catches/' + catchId, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(obj)
        });
        const data = await response.json();

        saveBtn.textContent = 'Update';
        loadCatches();

    })


}


async function deleteCatch(event) {
    event.preventDefault()
    let id = event.target.parentNode.id
    const token = sessionStorage.getItem('userToken');
    let confirmed = confirm('Are you sure you want to delete this column?');
    if (confirmed) {

        try {
            const response = await fetch('http://localhost:3030/data/catches/' + id, {
                method: 'delete',
                headers: { 'X-Authorization': token }
            })

            if (!response.ok) {
                throw Error(await response.json());
            }
        } catch (err) {
            console.log(err);
        }
        loadCatches();
    }
}

async function onCreateSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    let angler = formData.get('angler');
    let weight = Number(formData.get('weight'));
    let species = formData.get('species');
    let location = formData.get('location');
    let bait = formData.get('bait');
    let captureTime = Number(formData.get('captureTime'));

    if (angler == '' || weight == '' || species == '' || location == '' || bait == '' || captureTime == '') {
        return alert('All fields are required!')
    } else if (isNaN(weight)) {
        return alert('Weight has to be a number!')
    } else if (isNaN(captureTime)) {
        return alert('Capture time must be a number!')
    }

    const token = sessionStorage.getItem('userToken');

    const response = await fetch('http://localhost:3030/data/catches', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ angler, weight, species, location, bait, captureTime })
    })

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message)
    }
    document.querySelector('#addForm [name="weight"]').value = '';
    document.querySelector('#addForm [name="angler"]').value = '';
    document.querySelector('#addForm [name="species"]').value = '';
    document.querySelector('#addForm [name="location"]').value = '';
    document.querySelector('#addForm [name="bait"]').value = '';
    document.querySelector('#addForm [name="captureTime"]').value = '';

    loadCatches();
}

async function loadCatches() {

    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();
    const divElement = document.getElementById('catches');
    divElement.innerHTML = '';
    data.map(createInfoColumn).forEach(obj => divElement.appendChild(obj))

}

function createInfoColumn(obj) {

    const element = e('div', { className: 'catch', id: obj._id },
        e('label', {}, 'Angler'),
        e('input', { type: 'text', className: 'angler', value: obj.angler, disabled: 'true' }),
        e('hr', {}),
        e('label', {}, "Weight"),
        e('input', { type: 'number', className: 'weight', value: obj.weight, disabled: 'true' }),
        e('hr', {}),
        e('label', {}, 'Species'),
        e('input', { type: 'text', className: 'species', value: obj.species, disabled: 'true' }),
        e('hr', {}),
        e('label', {}, 'Location'),
        e('input', { type: 'text', className: 'location', value: obj.location, disabled: 'true' }),
        e('hr', {}),
        e('label', {}, 'Bait'),
        e('input', { type: 'text', className: 'bait', value: obj.bait, disabled: 'true' }),
        e('hr', {}),
        e('label', {}, "Capture Time"),
        e('input', { type: 'number', className: 'captureTime', value: obj.captureTime, disabled: 'true' }),
        e('hr', {}));

    let updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.className = 'update';

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', deleteCatch)
    updateBtn.addEventListener('click', updateFunc)

    const userId = sessionStorage.getItem('userId');

    if (userId == obj._ownerId) {
        deleteBtn.disabled = false;
        updateBtn.disabled = false;
    } else {
        deleteBtn.disabled = true;
        updateBtn.disabled = true;
    }

    element.appendChild(updateBtn);
    element.appendChild(deleteBtn);
    return element
}


window.addEventListener('load', async () => {
    const token = sessionStorage.getItem('userToken')

    if (token != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('logoutBtn').addEventListener('click', logout);
        document.querySelector('#addForm button').disabled = false;
    } else {
        document.getElementById('guest').style.display = 'inline-block';
    }

});

async function logout() {

    const token = sessionStorage.getItem('userToken');

    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token }
    });

    if (response.ok == false) {
        const error = await response.json();
        return alert(error.message)
    }

    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userId');
    window.location.pathname = 'index.html'
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