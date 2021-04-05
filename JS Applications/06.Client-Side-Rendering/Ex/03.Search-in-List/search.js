import { towns } from './towns.js'
import { html, render } from './node_modules/lit-html/lit-html.js'

function onSearch(event) {
   const match = event.target.parentNode.querySelector('input').value;
   update(match)
}



const itemTemplate = (name, match) => html`
<li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>`

const sectionTemplate = (towns, match) => html`
<article>
   <div id="towns">
      <ul>
         ${towns.map(t => itemTemplate(t, match))}
      </ul>
   </div>
   <input type="text" id="searchText" .value=${match} />
   <button @click=${onSearch}>Search</button>
   <div id="result">${countMatches(towns, match)}</div>
</article>
`

const main = document.body;
update();

function update(match = '') {
   const result = sectionTemplate(towns, match);
   render(result, main)

}

function countMatches(towns, match) {
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   if (matches) {
      if (matches == 1) {
         return `${matches} match found.`
      } else {
         return `${matches} matches found.`;
      }
   } else {
      return '';
   }
}