import { showDetails } from './details.js';
import { e } from './dom.js'


async function getMovies() {
    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();

    return data;
}

function createMoviePreview(movie) {
    const element = e('div', { className: 'card mb-4' });
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
       
            <button id="${movie._id}" type="button" class="btn btn-info movieDetailsLink">Details</button>
</div>`
    return element;
}

let main;
let section;
let container;

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('.card-deck.d-flex.justify-content-center');

    container.addEventListener('click', event => {
        event.preventDefault();
        if (event.target.classList.contains('movieDetailsLink')) {
            showDetails(event.target.id)
        }
    })

}

export async function showHome() {
    container.innerHTML = 'Loading...'
    main.innerHTML = "";
    main.appendChild(section)

    const movies = await getMovies();
    const cards = movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));
    container.innerHTML = "";
    container.appendChild(fragment);

}