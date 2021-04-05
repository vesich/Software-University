const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:3000'; // Application host (NOT service host - that can be anything)

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}


let browser;
let page;
let context;

describe('Messenger', function () {
    this.timeout(6000)
    before(async () => {

        browser = await chromium.launch({ headless: false, slowMo: 500 });
        //  browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        //  page = await browser.newPage();

        context = await browser.newContext();

        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    describe('Book Library', () => {
        it('test if loading all the books', async () => {

            let author = 'pesho';
            let title = 'a book';

             await page.route('**/jsonstore/collections/books*', route => route.fulfill(json({ author, title, _id: '132' })))
            await page.goto(host)

            await page.click('#loadBooks');

            const value = await page.$eval('tbody', el => el.textContent);
            console.log(value);

          //   expect(value.includes('Harry Potter and the Philosopher\'s Stone')).to.be.true
             expect(value.includes('a book')).to.be.true
            
        })


    })
})