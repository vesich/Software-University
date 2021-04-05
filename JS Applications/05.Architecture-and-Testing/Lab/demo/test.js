const { chromium } = require('playwright-chromium');

const { expect } = require('chai');

let browser, page; // Declare reusable variables​

describe('E2E tests', function () {
    this.timeout(6000)

    before(async () => {
        browser = await chromium.launch();
        //  browser = await chromium.launch({ headless: false, slowMo: 500 });   
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });


    it('loads static page', async () => {
        await page.goto('http://localhost:3000')

        const titles = await page.$$eval('.accordion .head span', (spans) => spans.map(s => s.textContent));

        expect(titles).to.deep.equal(['Scalable Vector Graphics', 'Open standard', 'Unix', 'ALGOL'])

        expect(titles).includes('Open standard');
        expect(titles).includes('Scalable Vector Graphics');
        expect(titles).includes('Unix');
        expect(titles).includes('ALGOL');

        // const content = await page.textContent('.accordion .head span');
        // expect(content).to.contains('Scalable Vector Graphics')

    })

    it('toggles content', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More');

        await page.waitForSelector('#main>.accordion:first-child >> .extra p')

        await page.click('#main>.accordion:first-child >> text=Less');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');
        expect(visible).to.be.false;


    })

});