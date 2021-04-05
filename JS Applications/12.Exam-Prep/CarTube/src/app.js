import { render } from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'

import { logout } from './api/data.js'
import { getUserData } from './utility.js'
import { loginView, registerView } from './views/auth.js'
import { catalogView } from './views/catalog.js'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { homeView } from './views/home.js'
import { pageView } from './views/my-page.js'
import { searchView } from './views/search.js'

const main = document.getElementById('site-content');


page('/', decorateContext, homeView);
page('/login', decorateContext, loginView);
page('/register', decorateContext, registerView);
page('/catalog', decorateContext, catalogView);
page('/details/:id', decorateContext, detailsView);
page('/create', decorateContext, createView);
page('/edit/:id', decorateContext, editView);
page('/my-page', decorateContext, pageView);
page('/search', decorateContext, searchView);



page.start();
setUserNav();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('welcome').textContent = `Welcome, ${user.username}`
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}


document.getElementById('logoutBtn').addEventListener('click', logoutFunc);

function logoutFunc() {
    logout();
    setUserNav();
    page.redirect('/');
}