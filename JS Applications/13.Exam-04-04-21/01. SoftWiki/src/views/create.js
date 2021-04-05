import { createArticle } from '../api/data.js'
import { html } from '../../node_modules/lit-html/lit-html.js'

const createTemplate = (onSubmit) => html`
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form @submit=${onSubmit} id="create">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>`;

export async function createView(ctx) {

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title').trim();
        const category = formData.get('category').trim();
        const content = formData.get('content').trim();

        let possibleCategory = ['JavaScript', 'C#', 'Java', 'Python'];
        if (title == '' || category == '' || content == '') {
            return alert('All fields are required!')
        }
        let found = possibleCategory.find(one => one == category);
        if (!found) {
            return alert('Category must be JavaScript, C#, Java or Python')
        }

        await createArticle({title, category, content});
        ctx.page.redirect('/');

    }
}