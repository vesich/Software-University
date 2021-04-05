import { getMyMemes } from '../api/data.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

const myMemesTemplate = (memes, username, email, gender) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        ${memes.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : memes.map(oneTemplate)}
    </div>
</section>`;

const oneTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

export async function profileView(ctx) {

    const memes = await getMyMemes();

    const username = sessionStorage.getItem('username');
    const userGender = sessionStorage.getItem('userGender');
    const email = sessionStorage.getItem('email');

    ctx.render(myMemesTemplate(memes, username, email, userGender))
}

