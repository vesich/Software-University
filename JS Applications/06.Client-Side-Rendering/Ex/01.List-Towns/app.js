// add click listener
// parse input
//execute template
//render result
// receiving data ->  returning list

import { html, render } from './node_modules/lit-html/lit-html.js'

const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;


// const towns = ['sofia', 'vidin', 'varna'];
// const result = listTemplate(towns)
// const root = document.getElementById('root')
// render(result, root)

document.getElementById('btnLoadTowns').addEventListener('click', updateList);

function updateList(event) {
    event.preventDefault();

    const townsAsString = document.getElementById('towns').value;
    const towns = townsAsString.split(", ").map(x => x.trim());

    const result = listTemplate(towns);
    const root = document.getElementById('root');
    render(result, root)
}