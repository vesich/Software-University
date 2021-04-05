import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

const main = document.querySelector('main');
const span = document.getElementById('welcome-span');
document.getElementById('logoutBtn').addEventListener('click', logoutFunc);

import { loginView } from './views/login.js'
import { homeView } from './views/home.js'
import { registerView } from './views/register.js'
import { logout } from './api/data.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { profileView } from './views/my-page.js';


setUserNav();

page('/', decorateContext, guestUsersOnly, homeView);
page('/login', decorateContext, loginView);
page('/register', decorateContext, registerView);
page('/catalog', decorateContext, catalogView);
page('/create', decorateContext, createView);
page('/details/:id', decorateContext, detailsView);
page('/edit/:id', decorateContext, editView);
page('/my-profile', decorateContext, profileView);


page.start();

function guestUsersOnly(ctx, next) {
    const token = sessionStorage.getItem('authToken');
    if (token) {
        return ctx.page.redirect('/catalog')
    }
    next();
}



function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');

    if (email) {
        span.textContent = `Welcome, ${email}`
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}

async function logoutFunc() {
    await logout();
    setUserNav();
    page.redirect('/');
}




// някво шано включване на клас Актив
const nav = document.querySelector('nav');
nav.addEventListener('click', setActiveClass);

function setActiveClass(ev) {
    [...nav.querySelectorAll('a')].forEach(a => a.classList.remove('active'));
    if (ev.target.tagName == "A") {
        ev.target.classList.add("active");
    }
}




