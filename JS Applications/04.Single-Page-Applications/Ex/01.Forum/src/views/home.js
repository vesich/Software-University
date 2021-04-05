import { e } from '../dom.js'
import { getThemes } from '../api/data.js'



function themePreview(theme) {
    let time = theme.date.split("-").join(" ").split("T").join(" ").slice(0, -5)
    const element = e('div', { className: 'topic-container' });
    element.innerHTML = `
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <a id="${theme._id} "href="#" class="normal">
                            <h2>${theme.title}</h2>
                        </a>
                        <div class="columns">
                            <div>
                                <p>Date: <time>${time}</time></p>
                                <div class="nick-name">
                                    <p>Username: <span>${theme.userName}</span></p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>`

    return element;
}





export function setupHome(section, navigation) {

    section.addEventListener('click', ev => {

        if (ev.target.tagName == 'H2') {
            ev.preventDefault();
            const themeId = ev.target.parentNode.id
            navigation.goTo('detailTheme', themeId)
        }


    })

    return showHome

    async function showHome() {
        section.innerHTML = "";
        const themes = await getThemes();
        const cards = Object.values(themes);

        if (cards.length == 0) {
            section.innerHTML = `<h3 style="text-align:center">No posts added yet. Be the first one to do it by clicking on Add Post.</h3>`
            
        } else {
            cards.map(themePreview).forEach(c => section.appendChild(c));
        }
        return section;
    }

}

