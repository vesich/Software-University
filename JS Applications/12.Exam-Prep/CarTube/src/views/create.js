import { html } from '../../node_modules/lit-html/lit-html.js';
import { createAd } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

export async function createView(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const car = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            description: formData.get('description'),
            year: Number(formData.get('year')),
            imageUrl: formData.get('imageUrl'),
            price: Number(formData.get('price'))
        }
        if (Number.isNaN(car.year) || Number.isNaN(car.price)) {
            return alert('Year and Price must be numbers!')
        }
        if (Object.values(car).some(x => !x)) {
            return alert('All fields are required!')
        }

        await createAd(car);
        ev.target.reset();
        ctx.page.redirect('/catalog')
    }
}

