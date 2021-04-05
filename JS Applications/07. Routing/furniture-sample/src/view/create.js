import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api/data.js'


const createTemplate = (onSubmit, invalidMake, invalidModel, invalidYear, invalidDes, invalidPrice, invalidImg) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="${'form-control' + (invalidMake ? ' is-invalid' : '')}" id="new-make" type="text"
                    name="make">
                <p class="${invalidMake ? "invalidated" : "validated"}">Make must be at least 4 symbols long</p>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="${'form-control' + (invalidModel ? ' is-invalid' : '')}" id="new-model" type="text"
                    name="model">
                <p class="${invalidModel ? "invalidated" : "validated" }">Model must be at least 4 symbols long</p>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="${'form-control' + (invalidYear ? ' is-invalid' : '')}" id="new-year" type="number"
                    name="year">
                <p class="${invalidYear ? "invalidated" : "validated"}">Year must be between 1950 and 2050</p>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="${'form-control' + (invalidDes ? ' is-invalid' : '')}" id="new-description" type="text"
                    name="description">
                <p class="${invalidDes ? "invalidated" : "validated"}">Description must be more than 10 symbols</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="${'form-control' + (invalidPrice ? ' is-invalid' : '')}" id="new-price" type="number"
                    name="price">
                <p class="${invalidPrice ? "invalidated" : "validated"}">Price must be a positive number</p>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="${'form-control' + (invalidImg ? ' is-invalid' : '')}" id="new-image" type="text"
                    name="img">
                <p class="${invalidImg ? "invalidated" : "validated"}">Image URL is required</p>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>
`

export async function createPage(ctx) {

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
        const validMake = data.make.length < 4;
        const validModel = data.model.length < 4;
        const validYear = Number(data.year) < 1950 || Number(data.year) > 2050;
        const validDesc = data.description.length < 10;
        const validPrice = Number(data.price) < 0 || !Number(data.price);
        const validImg = !data.img;

        if (validMake || validModel || validYear || validDesc || validPrice || validImg) {
            return ctx.render(createTemplate(onSubmit, validMake, validModel, validYear, validDesc, validPrice, validImg))
        }
        await createRecord(data);
        ctx.page.redirect('/');
    }

}