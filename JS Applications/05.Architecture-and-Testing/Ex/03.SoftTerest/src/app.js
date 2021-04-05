//setup views
//setup nav links
//show appropriate navigation based on user session
//start application in default view -> home

import { setupHome } from './views/home.js'
import { setupDetails } from './views/details.js'
import { setupLogin } from './views/login.js'
import { setupRegister } from './views/register.js'
import { setupDashboard } from './views/dashboard.js'
import { setupCreate } from './views/create.js'
// import { logout } from './api/data.js'

const main = document.querySelector('main');
const nav = document.querySelector('nav');

const views = {};
const links = {};
const navigation = {
    goTo,
    setUserNav
};

registerView('home', document.getElementById('home-page'), setupHome, 'homeLink');
registerView('login', document.getElementById('login-page'), setupLogin, 'loginLink');
registerView('register', document.getElementById('register-page'), setupRegister, 'registerLink');
registerView('dashboard', document.getElementById('dashboard-holder'), setupDashboard, 'dashboardLink');
registerView('create', document.getElementById('create-page'), setupCreate, 'createLink');
registerView('details', document.getElementById('details-page'), setupDetails);
registerView('logout', document.getElementById('home-page'), setupHome, 'logoutLink' )
document.getElementById('views').remove();

setupNavigation();


//Start app in home view
goTo('home');

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if (linkId) {
        links[linkId] = name;
    }

}


async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);
    main.appendChild(section)

}

function setupNavigation() {
    setUserNav();

    nav.addEventListener('click', (ev) => {
        console.log(links);
        console.log(ev.target);

        const viewName = links[ev.target.id];
        if (viewName) {
            ev.preventDefault();
            goTo(viewName)
        } else {
            ev.preventDefault();
            console.log(ev.target.id);
        }
    })
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');

    if (token) {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'list-item');
    }

}


async function logoutFunc() {


    // goTo('home')

}
