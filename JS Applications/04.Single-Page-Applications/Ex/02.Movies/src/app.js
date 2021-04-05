import { setupHome, showHome } from './home.js'
import { setupDetails } from './details.js'
import { setupLogin, showLogin } from './login.js'
import { setupRegister, showRegister } from './register.js'
import { setupCreate, showCreate } from './create.js'
import { setupEdit } from './edit.js'


const main = document.querySelector('main');

const links = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    'createLink': showCreate,
    

}

setupSection('home-page', setupHome);
setupSection('movie-details', setupDetails);
setupSection('form-login', setupLogin);
setupSection('form-sign-up', setupRegister);
setupSection('add-movie', setupCreate);
setupSection('edit-movie', setupEdit);


setupNavigation();

//Start application

showHome();

function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section)
}

function setupNavigation() {
    const email = sessionStorage.getItem('email')
    if (email) {
        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
    } else {
        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
    }

    document.querySelector('nav').addEventListener('click', ev => {


        const view = links[ev.target.id];
        if (typeof view == 'function') {
            ev.preventDefault();
            view();
        }

    })
    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault();
        showCreate();
    })

    document.getElementById('logoutBtn').addEventListener('click', logout)
}

async function logout() {
    const token = sessionStorage.getItem('authToken');

    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token }
    });

    if (response.ok) {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');

        [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
        [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');

        showHome()
    } else {
        const error = await response.json();
        alert(error.message);
    }
}