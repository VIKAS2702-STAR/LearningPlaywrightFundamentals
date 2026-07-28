# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\262_Test_VWODashboard.spec.ts >> go directly to dashboard - no login @VWO
- Location: tests\04_Session_Storage\262_Test_VWODashboard.spec.ts:9:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /dashboard/
Received string:  "Wingify - Application"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    8 × locator resolved to <html lang="en" id="atomic" class="no-js" data-abt-theme="true">…</html>
      - unexpected value "Wingify - Application"

```

```yaml
- main "Application main content":
  - img "Wingify ABTasty logo"
  - text: LOADING WINGIFY
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
  10 |     await page.goto( "https://app.wingify.com/#/dashboard?accountId=1260706" );
> 11 |     await expect( page ).toHaveTitle( /dashboard/ );
     |                          ^ Error: expect(page).toHaveTitle(expected) failed
  12 |     console.log( "✅ Dashboard loaded - no login needed" );
  13 |     await page.waitForTimeout( 3000 );
  14 | } );
  15 | test( "go directly to settings - no login @VWO", async ( { page } ) => {
  16 |     await page.goto( "https://app.wingify.com/#/settings/accounts/general?accountId=1260706" );
  17 |     await expect( page ).toHaveTitle( /settings/ );
  18 |     console.log( "✅ Settings loaded - still logged in" );
  19 |     await page.waitForTimeout( 3000 );
  20 | } );
  21 | 
```