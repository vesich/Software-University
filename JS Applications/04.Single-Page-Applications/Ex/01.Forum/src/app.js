
import { setupHome } from './views/home.js'
import { setupForm } from './views/form.js'
import { setupDetails } from './views/formDetails.js'


const main = document.querySelector('#main');
const nav = document.querySelector('nav');

const views = {};
const links = {};

const navigation = {
    goTo
};

registerView('home', document.getElementById('home-Page'), setupHome, 'homeLink')
registerView('addForm', document.getElementById('form-Page'), setupForm, 'addPost')
registerView('detailTheme', document.getElementById('theme-Page'), setupDetails)
document.getElementById('views').remove();

setupNavigation();

// Start Application in home view

goTo('home')

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation)
    views[name] = view;
    if (linkId) {
        links[linkId] = name;
    }
}

async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);
    main.appendChild(section);
}

function setupNavigation() {
    nav.addEventListener('click', (ev) => {
        const viewName = links[ev.target.id];
        if (viewName) {
            ev.preventDefault();
            goTo(viewName);
        }
    })
}
