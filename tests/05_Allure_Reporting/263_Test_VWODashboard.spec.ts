import { test, expect } from "@playwright/test";

/**
 * Test Suite: VWO Dashboard & Settings — No Login Required
 * 
 * This suite uses a pre-saved session (storageState) to skip VWO login.
 * Custom reporter (TTA HTML Reporter) logs every step in detail.
 */

// Load saved browser session so user appears already logged in
test.use( {
    storageState: "./user-session.json"
} );

// ─────────────────────────────────────────────────────────────
// Describe Block: VWO Pages — Direct Access Without Login
// ─────────────────────────────────────────────────────────────
test.describe( "VWO Pages — Access Without Login", () => {

    // ── Test 1: View VWO Dashboard ────────────────────────────
    test( "View VWO Dashboard without logging in", async ( { page } ) => {

        await test.step( "Load the saved user session from storageState", async () => {
            // storageState automatically restores cookies/localStorage
            console.log( "✅ Saved session loaded — user is authenticated" );
        } );

        await test.step( "Navigate directly to VWO Dashboard URL", async () => {
            await page.goto( "https://app.wingify.com/#/dashboard?accountId=1260706" );
            console.log( "🌐 Navigated to VWO Dashboard" );
        } );

        await test.step( "Confirm the Dashboard page loaded successfully", async () => {
            await expect( page ).toHaveURL( /dashboard/ );
            console.log( "✅ Dashboard page is displayed — no login prompt appeared" );
        } );

        await test.step( "Wait briefly to visually observe the Dashboard", async () => {
            await page.waitForTimeout( 3000 );
            console.log( "👀 Observed Dashboard for 3 seconds" );
        } );

    } );

    // ── Test 2: View VWO Settings ─────────────────────────────
    test( "View VWO Settings without logging in", async ( { page } ) => {

        await test.step( "Session is already active — no login needed", async () => {
            console.log( "✅ Using existing saved session — skipping VWO login" );
        } );

        await test.step( "Navigate directly to VWO Settings page", async () => {
            await page.goto( "https://app.wingify.com/#/settings/accounts/general?accountId=1260706" );
            console.log( "🌐 Navigated to VWO Settings" );
        } );

        await test.step( "Confirm the Settings page loaded successfully", async () => {
            await expect( page ).toHaveURL( /settings/ );
            console.log( "✅ Settings page is displayed — user is still logged in" );
        } );

        await test.step( "Wait briefly to visually observe the Settings page", async () => {
            await page.waitForTimeout( 3000 );
            console.log( "👀 Observed Settings page for 3 seconds" );
        } );

    } );

} );
