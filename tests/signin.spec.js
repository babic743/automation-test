const { test, expect } = require('@playwright/test');

// URL of the page to visit before each test
const targetPageUrl = 'https://magento.softwaretestingboard.com/';

test.beforeEach(async ({ page }) => {
  // Navigate to the page before each test
  await page.goto(targetPageUrl);

   // Choose the "Sign in" button
   const signInButtonSelector = 'li.authorization-link > a';

   await page.click(signInButtonSelector);

   // Wait for a short period to see the result 
   await page.waitForTimeout(3000);
});

test('Sign in', async ({ page }) => {
    
    const userName = 'input[name="login[username]"]';

    await page.type(userName, 'babic743@gmail.com');

await page.waitForTimeout(2000);

const password = 'input[name="login[password]"]';

await page.type(password, 'John12345');
await page.waitForTimeout(5000);

});









