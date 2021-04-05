import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllAds, getCollectionSize } from '../api/data.js';
import { carTemplate } from './common/car.js'


const catalogTemplate = (data, page, pages) => html`
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                <div> Page ${page} / ${pages}
                    ${page > 1 ? html` <a class="button-list" href="/catalog?page=${page - 1}">&lt; Prev </a>` : ''}
                    ${page < pages ? html`<a class="button-list" href="/catalog?page=${page + 1}">Next &gt; </a>` : ''}
                </div>
                <!-- Display all records -->
                ${data.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : data.map(carTemplate)}
        
        
                <!-- Display if there are no records -->
        
            </div>
        </section>`;

export async function catalogView(ctx) {
    const page = +ctx.querystring.split('=')[1] || 1;
    const count = await getCollectionSize();
    const pages = Math.ceil(count / 3);


    const data = await getAllAds(page);
    ctx.render(catalogTemplate(data, page, pages))

}
