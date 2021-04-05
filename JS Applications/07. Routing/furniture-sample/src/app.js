import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import { logout } from './api/data.js'

import { dashboardPage } from './view/dashboard.js'
import { detailsPage } from './view/details.js'
import { eidtPage } from './view/edit.js'
import { registerPage } from './view/register.js'
import { loginPage } from './view/login.js'
import { myPage } from './view/myFurniture.js'
import { createPage } from './view/create.js'

//This project run with following libraries: lit-html , page, lite-server!  Thanks:) !

const main = document.querySelector('.container')

page('/', decorateContext, dashboardPage);
page('/dashboard', decorateContext, dashboardPage);
page('/my-furniture', decorateContext, myPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, eidtPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);


document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout()
    setUserNav()
    page.redirect('/')
})

setUserNav();

//start Applicatioon
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}