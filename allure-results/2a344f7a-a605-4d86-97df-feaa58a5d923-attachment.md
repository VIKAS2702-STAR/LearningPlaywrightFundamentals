# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\262_Test_VWODashboard.spec.ts >> go directly to dashboard - no login @VWO
- Location: tests\04_Session_Storage\262_Test_VWODashboard.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /dashboard/i
Received string:  "Login - Wingify"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    5 × locator resolved to <html lang="en" id="atomic" class="no-js" data-abt-theme="true">…</html>
      - unexpected value "Login - Wingify"

```

```yaml
- main "Application main content":
  - img "Wingify"
  - paragraph: Sign in to Wingify platform
  - list:
    - listitem:
      - text: Email address
      - textbox "Email address":
        - /placeholder: Enter email ID
        - text: opg73@singleuseemail.site
    - listitem:
      - text: Password
      - textbox "Password":
        - /placeholder: Enter password
      - button "Toggle password visibility":
        - img
    - listitem:
      - button "Forgot Password?"
    - listitem:
      - text: Remember me
      - img
    - listitem:
      - button "Sign in"
    - listitem:
      - heading "Or" [level=6]
    - listitem:
      - button "Sign in with Google":
        - img
        - text: Sign in with Google
    - listitem:
      - button "Sign in using SSO":
        - img
        - text: Sign in using SSO
    - listitem:
      - button "Sign in with Passkey":
        - img
        - text: Sign in with Passkey
    - listitem:
      - text: Don't have an account?
      - link "Start a free trial":
        - /url: https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage
    - listitem:
      - text: By continuing, you agree to Wingify's
      - link "Privacy policy":
        - /url: https://wingify.com/privacy-policy/?utm_medium=app&utm_source=login-page&utm_campaign=legal_privacy_login
      - text: "&"
      - link "Terms":
        - /url: https://wingify.com/terms/?utm_medium=website&utm_source=login-page&utm_campaign=legal_terms_login
      - text: .
  - img "Wingify abtasty logo"
  - img
  - img "Wingify abtasty logo"
  - heading "Welcome to Wingify!" [level=1]
  - heading "app.vwo.com has transitioned to app.wingify.com" [level=2]
  - heading "Your plans, features, and data remain unchanged." [level=2]
  - link "Learn More":
    - /url: https://vwo.com/product-updates/vwo-wingify-aligning-our-domain/
    - text: Learn More
    - img
- img:
  - text: "'"
  - img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | // Load Saved Session - already logged in
  4  | 
  5  | test.use( {
  6  |     storageState: "./user-session.json"
  7  | } );
  8  | 
  9  | test( "go directly to dashboard - no login @VWO", async ( { page } ) => {
  10 | 
  11 |     await test.step( "Navigate to Wingify dashboard", async () => {
  12 |         await page.goto( "https://app.wingify.com/#/dashboard/get-started?accountID=1227004" );
  13 |         await page.screenshot( { path: `./test-results/screenshots/vwo-dashboard-navigate.png`, fullPage: true } );
  14 |     } );
  15 | 
  16 |     await test.step( "Verify dashboard loaded successfully", async () => {
> 17 |         await expect( page ).toHaveTitle( /dashboard/i );
     |                              ^ Error: expect(page).toHaveTitle(expected) failed
  18 |         console.log( "✅ Dashboard loaded - no login needed" );
  19 |     } );
  20 | 
  21 |     await test.step( "Check VWO dashboard elements are visible", async () => {
  22 |         // Wait for key dashboard elements to render
  23 |         await page.waitForLoadState( "networkidle" );
  24 |         const title = await page.title();
  25 |         console.log( `📌 Page title: ${ title }` );
  26 |         await page.screenshot( { path: `./test-results/screenshots/vwo-dashboard-elements.png`, fullPage: true } );
  27 |     } );
  28 | 
  29 |     await test.step( "Wait and settle the page", async () => {
  30 |         await page.waitForTimeout( 3000 );
  31 |         await page.screenshot( { path: `./test-results/screenshots/vwo-dashboard-final.png`, fullPage: true } );
  32 |     } );
  33 | 
  34 | } );
  35 | 
  36 | test( "go directly to settings - no login @VWO", async ( { page } ) => {
  37 | 
  38 |     await test.step( "Navigate to Wingify settings page", async () => {
  39 |         await page.goto( "https://app.wingify.com/#/settings/accounts/general?accountID=1227007" );
  40 |         await page.screenshot( { path: `./test-results/screenshots/vwo-settings-navigate.png`, fullPage: true } );
  41 |     } );
  42 | 
  43 |     await test.step( "Verify settings page loaded successfully", async () => {
  44 |         await expect( page ).toHaveTitle( /settings/i );
  45 |         console.log( "✅ Settings loaded - still logged in" );
  46 |     } );
  47 | 
  48 |     await test.step( "Inspect VWO settings page elements", async () => {
  49 |         await page.waitForLoadState( "networkidle" );
  50 |         const title = await page.title();
  51 |         console.log( `📌 Page title: ${ title }` );
  52 |         await page.screenshot( { path: `./test-results/screenshots/vwo-settings-elements.png`, fullPage: true } );
  53 |     } );
  54 | 
  55 |     await test.step( "Wait and settle the settings page", async () => {
  56 |         await page.waitForTimeout( 3000 );
  57 |         await page.screenshot( { path: `./test-results/screenshots/vwo-settings-final.png`, fullPage: true } );
  58 |     } );
  59 | 
  60 | } );
  61 | 
```