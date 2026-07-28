# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\262_Test_VWODashboard.spec.ts >> go directly to dashboard - no login
- Location: tests\04_Session_Storage\262_Test_VWODashboard.spec.ts:10:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /dashboard/
Received string:  "Wingify - Application"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    4 × unexpected value "Wingify - Application"

```

```yaml
- main "Application main content":
  - img "Wingify ABTasty logo"
  - text: LOADING WINGIFY
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { log } from "node:console";
  3  | 
  4  | // Load Saved Session - already logged in
  5  | 
  6  | test.use( {
  7  |     storageState: "./user-session.json"
  8  | } );
  9  | 
  10 | test( "go directly to dashboard - no login", async ( { page } ) => {
  11 |     await page.goto( "https://app.wingify.com/#/dashboard/get-started?accountID=1227004" );
> 12 |     await expect( page ).toHaveTitle( /dashboard/ );
     |                          ^ Error: expect(page).toHaveTitle(expected) failed
  13 |     console.log( "Dashboard loaded - no login needed" );
  14 |     await page.waitForTimeout( 3000 );
  15 | } );
  16 | 
  17 | test( "go directly to settings - no login", async ( { page } ) => {
  18 |     await page.goto( "https://app.wingify.com/#/settings/accounts/get-started?accountID=1227007" );
  19 |     await expect( page ).toHaveTitle( /settings/ );
  20 |     console.log( "Settings loaded - still logged in" );
  21 |     await page.waitForTimeout( 3000 );
  22 | } );
  23 | 
  24 | 
```