import { test, expect } from '@playwright/test';

test( 'has title', async ( { page } ) => {
    await page.goto( 'https://playwright.dev/' );
    await expect( page ).toHaveTitle( /Playwright/ );
} );

//Skip Test
test.skip( 'Skipped Test', async ( { page } ) => {
    // this test will be skiped
} );

// Only run this test case
test.only( 'focused test', async ( { page } ) => {
    // only this test will be run
} );

// Mark as failing
test.fail( 'expected to fail', async ( { page } ) => {
    // this test is expected to fail
} );

// Slow test (3x timeout)
test.slow( 'Slow Test', async ( { page } ) => {
    // Has extends timeout
} );

// Conditional Skip
test( 'conditiona', async ( { page, browserName } ) => {
    test.skip( browserName === 'firefox', 'Not Supported In Firefox' );
} );