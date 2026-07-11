import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {

    // Level 1: Launch Browser- Heaviest Operation, do it once

    let browser: Browser = await chromium.launch( { headless: false } );
    console.log( "Browser Launched", browser );

    // Level 2: Create Context - Fresh Session, Isolated Cookies

    let context1: BrowserContext = await browser.newContext();
    console.log( "Context Created", context1 );

    let context2: BrowserContext = await browser.newContext();
    console.log( "Context Created", context2 );


    //Level 3: Open Page- A Tab Inside the Context

    let page: Page = await context1.newPage();
    console.log( "Page Opened" );


    await page.goto( "https://app.vwo.com" );
    console.log( "Title:", await page.title() );

    // Cleanup- Reverse Order

    await page.close();
    await context1.close();
    await context2.close();
    await browser.close();

}

// Browser Launched
// Context Created
// Page Opened
//Title: Example Domain
run();