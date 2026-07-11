import { chromium } from "playwright";

async function multiUserTest() {

    let browser = await chromium.launch( { headless: false } );

    // Admin

    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    await adminPage.goto( "https://app.vwo.com/login" );
    console.log( "Admin: on login Page" );

    // Viewer

    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto( "https://app.vwo.com/login" );
    console.log( "Viewer: on Login Page" );

    await viewerContext.close();
    await adminContext.close();
    await browser.close();

}

multiUserTest();