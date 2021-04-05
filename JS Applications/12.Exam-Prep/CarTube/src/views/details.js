import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAdById, deleteAd } from '../api/data.js';



const detailsTemplate = (car, onDelete, isOwner) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">

            ${isOwner ? html`<a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>` : ''}

        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const adId = ctx.params.id;
    const car = await getAdById(adId);
    const isOwner = ctx.user && car._ownerId == ctx.user._id;

    ctx.render(detailsTemplate(car, onDelete, isOwner));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteAd(adId);
            ctx.page.redirect('/catalog')
        }

    }
}