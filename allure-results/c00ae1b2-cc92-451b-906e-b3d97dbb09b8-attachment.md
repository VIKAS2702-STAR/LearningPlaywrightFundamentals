# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 06_Multiple_Elements\265_Multi_Element_Direct.spec.ts >> Check locator
- Location: tests\06_Multiple_Elements\265_Multi_Element_Direct.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: /Forgot Password/i })

```

# Test source

```ts
  1 | import { test } from '@playwright/test';
  2 | 
  3 | test( 'Check locator', async ( { page } ) => {
  4 |     await page.goto( "https://app.thetestingacademy.com/playwright/multiple_element_filter" );
> 5 |     await page.getByRole( 'link', { name: /Forgot Password/i } ).click();
    |                                                                  ^ Error: locator.click: Target page, context or browser has been closed
  6 |     await page.pause();
  7 | } );
```