import { showHome } from "./home.js";


async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await response.json();
    return data;
}

async function onSubmit(data) {

    const movieId = data.id

    const movie = {
        title: data.title,
        description: data.description,
        img: data.imageUrl
    };

    if (movie.title == '' || movie.description == '' || movie.img == '') {
        return alert('All fields are required!')
    }

    const response = await fetch('http://localhost:3030/data/movies/' + movieId, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    });

    if (response.ok) {
        const movie = await response.json();
        showHome();
    } else {
        const error = await response.json();
        alert(error.message)
    }

}

let main;
let section;

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', ev => {
        ev.preventDefault();
        const confirmed = confirm('Do you want to make the changes?')
        if (confirmed) {
            const formData = new FormData(ev.target);
            onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
        }


    })

}

export async function showEdit(id) {
    main.innerHTML = "";
    main.appendChild(section)

    const movie = await getMovieById(id);

    section.querySelector('[name="id"]').value = id;
    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.img

}