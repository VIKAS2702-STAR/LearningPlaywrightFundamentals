import { test, expect } from '@playwright/test';

test( "goto with different waitUntil options", async ( { page } ) => {

    await page.goto( "https://app.vwo.com/page1", { waitUntil: "commit" } );
    console.log( "commit:server respond" );

    //wait for HTML to be parsed
    await page.goto( "https://app.vwo.com/page2", { waitUntil: "domcontentloaded" } );
    console.log( "domcontentloaded:HTML Parsed" );

    // DEFAULT- wait for everything (imaged,css,scripts)
    await page.goto( "https://app.vwo.com/page3", { waitUntil: "load" } );
    console.log( "load:all resource loaded" );

    // SLOWEST - wait for all network activity to stop
    await page.goto( "https://app.vwo.com/page4", { waitUntil: "networkidle" } );
    console.log( "networkidle:no request for 500ms" );


} );