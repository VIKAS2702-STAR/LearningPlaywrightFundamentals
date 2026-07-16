import { test, expect } from "@playwright/test";

test( 'Verify your First TestCase', async ( { page } ) => {

    await page.goto( "https://app.thetestingacademy.com/playwright/ttacart" );
} );