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

        //  browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
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

    it('load messages', async () => {
        await page.goto('http://localhost:3000/')

        await page.click('text=Refresh');

        await page.waitForSelector('#messages');

        const value = await page.$eval('#messages', el => el.value);

        expect(value.includes('Spami: Hello, George nice to see you! :)))')).to.be.true
    })

    it('Sends message', async function () {

        let author = 'Ivan'
        let content = 'texting something'


        await page.route('**/jsonstore/messenger*', route => route.fulfill(json({ author, content, _id: '132' })))
        await page.goto('http://localhost:3000');


        await page.fill('#content', content)
        await page.fill('#author', author)
        const [request] = await Promise.all([
            page.waitForRequest(request => request.url().includes('/jsonstore/messenger') && request.method() == 'POST'),
            page.click('[id="submit"]')
        ])


        const parsed = JSON.parse(request.postData())


        expect(parsed.author).to.equal('Ivan');
        expect(parsed.content).to.equal('texting something');

    });

})