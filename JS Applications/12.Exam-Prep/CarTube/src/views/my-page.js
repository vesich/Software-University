import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyAds } from '../api/data.js';
import { carTemplate } from './common/car.js'

const profileTemplate = (myCars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        <!-- Display all records -->
${myCars.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` : myCars.map(carTemplate)}
        <!-- Display if there are no records -->
        
    </div>
</section>`;

export async function pageView(ctx) {
const myCars = await getMyAds(ctx.user._id);

    ctx.render(profileTemplate(myCars));
}