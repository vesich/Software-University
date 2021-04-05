import { getThemeById, sendMessage, getComments } from '../api/data.js'
import { e } from '../dom.js'


function createThemeCard(theme) {
    let time = theme.date.split("-").join(" ").split("T").join(" ").slice(0, -5)
    const element = e('div', { className: 'theme-title' },
        e('div', { className: 'theme-name-wrapper' },
            e('div', { className: 'theme-name' },
                e('h2', {}, theme.title),
                e('p', {}, 'Date:', e('time', {}, time),
                    e('h2', {}, theme.post)))));
    return element

}

function createPreview(comm) {
    //  let time = comm.date.split("-").join(" ").split("T").join(" ").slice(0, -5)
    let element = e('div', { className: 'comment' });
    element.innerHTML = `<header class="header">
                            <p><span>${comm.author}</span> posted on <time>${comm.date}</time></p>
                            </header>
                            <div class="comment-main">
                                <div class="userdetails">
                            <img src="./static/profile.png" alt="avatar">
                            </div>
                            <div class="post-content">
                             <p>${comm.content}</p> 
    `
    return element;
}

function createCommentForm() {
    const element = e('div', { className: 'answer-comment' });
    element.innerHTML = `
<p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form >
                        <textarea name="postText" placeholder="Add your comment..." id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" placeholder="Enter your name" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
`
    return element;

}
export function setupDetails(section, navigation) {

    return showDetails

    async function showDetails(id) {

        section.innerHTML = "";
        const theme = await getThemeById(id);
        const themeId = id;

        const card = createThemeCard(theme);
        section.appendChild(card);

        const dataFromComments = await getComments()
        const cards = Object.values(dataFromComments);


        if (cards.length == 0) {
            let comm = e('h3', {}, 'No comments added yet!');
            section.appendChild(comm)
        } else {
            const newCards = cards.filter(c => c.postId == themeId)
            newCards.map(createPreview).forEach(c => section.appendChild(c))
        }


        section.appendChild(createCommentForm())
        const form = section.querySelector('form')
        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            const author = document.querySelector('[name="username"]').value;
            const content = document.querySelector('[name="postText"]').value;
            const date = new Date()
            const postId = themeId

            if (author == "" || content == "") {
                return alert('All fields have to be filled!')
            }
            const comment = await sendMessage({ author, content, date, postId })
            form.reset();

            navigation.goTo('detailTheme', id)
        })

        return section;
    }

}

