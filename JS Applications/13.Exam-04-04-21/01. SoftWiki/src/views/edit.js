import { getArticleById, updateArticle } from '../api/data.js'
import { html } from '../../node_modules/lit-html/lit-html.js'
console.log('edit');

const editTemplate = (item, onSubmit) => html`
    <section id="edit-page" class="content">
        <h1>Edit Article</h1>
    
        <form @submit=${onSubmit} id="edit">
            <fieldset>
                <p class="field title">
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" .value=${item.title}>
                </p>
    
                <p class="field category">
                    <label for="category">Category:</label>
                    <input type="text" name="category" id="category" .value=${item.category}>
                </p>
                <p class="field">
                    <label for="content">Content:</label>
                    <textarea name="content" id="content" .value=${item.content}></textarea>
                </p>
    
                <p class="field submit">
                    <input class="btn submit" type="submit" value="Save Changes">
                </p>
    
            </fieldset>
        </form>
    </section>`;


export async function editView(ctx) {

    const id = ctx.params.id;
    const item = await getArticleById(id);

    ctx.render(editTemplate(item, onSubmit));

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

        await updateArticle(item._id, {title, category, content});
        ctx.page.redirect('/')

    }
}