import { test, expect } from '@playwright/test';

test( "Verify The Title", async ( { page } ) => {
    await page.goto( "https://app.vwo.com" );
    await expect( page ).toHaveTitle( "Login - Wingify" );
    // page = fixture (injected by playwright)
} );