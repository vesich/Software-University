import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import { logout } from './api/data.js'
import { homeView } from './views/home.js'  
import { registerView } from './views/register.js'
import { loginView } from './views/login.js'
import { catalogView } from './views/catalog.js'
import { createView } from './views/create.js'
import { detailsView } from './views/details.js'
import { editView } from './views/edit.js'
import { searchView } from './views/search.js';


const main = document.getElementById('main-content');      

page('/', decorateContext, homeView);
page('/register', decorateContext, registerView);
page('/login', decorateContext, loginView);
page('/catalog', decorateContext, catalogView);
page('/create', decorateContext, createView);
page('/details/:id', decorateContext, detailsView);
page('/edit/:id', decorateContext, editView);
page('/search', decorateContext, searchView )


document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav()
    page.redirect('/')
})

setUserNav();

// start app
page.start(); /// page();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId) {
        document.getElementById('user').style.display = 'inline-block';   
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}