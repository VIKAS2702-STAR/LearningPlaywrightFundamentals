// https://app.vwo.com/#login

import { test, expect } from "@playwright/test";
test( "TC#1 - Verify that the app.vwo.com login is not working and gives you an error with lazy, strict and auto wait concepts", async ( { page } ) => {

    await page.goto( "https://app.vwo.com/#login" );

    // Default Locator
    // id, name, className, Tag. Custom Locator (via CSS Selector)

    // CSS Selector -> Every Browser has -> CSS Engine -> Help you to find the element by using the default Locators
    // id => #id
    //className => . (dot)
    // name => [name = "value"]
    // Tag => [tag]


    // <input
    //  type="email"
    //  class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder=
    // "login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    //>

    let userNameField = page.locator( '#login-username' );
    let passwordField = page.locator( '#login-password' );
    let loginButton = page.locator( "#js-login-btn" );

    // Now Playwright finds the element and acts (auto-wait)

    await userNameField.fill( "admin@admin.com" );
    await passwordField.fill( "Pass@123" );
    await loginButton.click();
    console.log( "All Actions Completed!" );


    let error_message = page.locator( '#js-notification-box-msg' );
    await expect( error_message ).toContainText( "Your email, password, IP address or location did not match" );

} );
