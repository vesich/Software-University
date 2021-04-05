import { html } from '../../node_modules/lit-html/lit-html.js';
import { search } from '../api/data.js';

const searchTemplate = (data, onSearch, title) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search" .value=${title || '' }>
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${data.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>` : data.map(itemTemplate)}
    </div>
</section>`;

const itemTemplate = (item) => html`
<a class="article-preview" href="/details/${item._id}">
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Category: <span>${item.category}</span></p>
    </article>
</a>`

export async function searchView(ctx) {

    const title = ctx.querystring.split('=')[1];
    const data = title ? await search(title) : []

    ctx.render(searchTemplate(data, onSearch, title))

    function onSearch(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const query = formData.get('search');

        ctx.page.redirect('/search?query=' + query);
    }
}