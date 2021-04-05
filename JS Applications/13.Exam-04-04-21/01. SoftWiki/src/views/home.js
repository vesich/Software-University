import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticles } from '../api/data.js'


const homeTemplate = (javaData, pythonData, jsData, cShData) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>

    <section class="recent js">
    <h2>JavaScript</h2>
        ${jsData.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : jsData.map(oneTemplate)}
    </section>
    <section class="recent csharp">
    <h2>C#</h2>
        ${cShData.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : cShData.map(oneTemplate)}
    </section>
    <section class="recent java">
    <h2>Java</h2>
        ${javaData.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : javaData.map(oneTemplate)}
    </section>
    <section class="recent python">
    <h2>Python</h2>
        ${pythonData.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : pythonData.map(oneTemplate)}
    </section>
</section>`;

const oneTemplate = (item) => html`
    <article>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <a href="/details/${item._id}" class="btn details-btn">Details</a>
    </article>
`


export async function homeView(ctx) {
    const data = await getArticles();

    const javaData = data.filter(obj => obj.category == "Java");
    const pythonData = data.filter(obj => obj.category == "Python");
    const jsData = data.filter(obj => obj.category == "JavaScript");
    const cShData = data.filter(obj => obj.category == "C#");

    ctx.render(homeTemplate(javaData, pythonData, jsData, cShData))
}



// optional