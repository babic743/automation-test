const { test, expect } = require('@playwright/test');

// URL of the page to visit before each test
const targetPageUrl = 'https://magento.softwaretestingboard.com/';

test.beforeEach(async ({ page }) => {

  // Navigate to the page before each test
  await page.goto(targetPageUrl);

   // Choose the "Create an account" button
   await page.click('a:has-text("Create an Account")');

   // Wait for a short period to see the result 
   await page.waitForTimeout(2000);
});

test('Confirm form text', async ({ page }) => {

  // verify text of First name
  const labelSelector = 'label.label[for="firstname"] > span';
const labelText = await page.locator(labelSelector).textContent();
expect(labelText).toBe('First Name');

  // Wait for a short period to see the result 
  await page.waitForTimeout(2000);
  
  // verify text of Last name
  expect(await page.locator('label[for="lastname"] > span').textContent()).toEqual("Last Name")
  
  // Wait for a short period to see the result 
  await page.waitForTimeout(2000);
  
  // verify text of Email
  expect(await page.locator('label[for="email_address"] > span').textContent()).toEqual("Email")
  
  // Wait for a short period to see the result 
  await page.waitForTimeout(2000);
  
  // verify text of Password
  expect(await page.locator('label[for="password"] > span').textContent()).toEqual("Password")
  
  // Wait for a short period to see the result 
  await page.waitForTimeout(2000);
  
  // verify text of Confirm Password
  expect(await page.locator('label[for="password-confirmation"] > span').textContent()).toEqual("Confirm Password")

  });

  test('Type in forms and submit', async ({ page }) => {
  
    const firstName = 'input.input-text.required-entry';

// Type the first name into the input field
await page.type(firstName, 'John');

// Wait for a short period to see the result (optional)
await page.waitForTimeout(2000);

const lastName = 'input[name="lastname"]';

// Type the last name into the input field
await page.type(lastName, 'Johnson');

// Wait for a short period to see the result (optional)
await page.waitForTimeout(2000);

const email = 'input[name="email"]';

// Type the email into the input field
await page.type(email, 'babic743@gmail.com');

// Wait for a short period to see the result (optional)
await page.waitForTimeout(2000);

const password = 'input[name="password"]';

// Type the password into the input field
await page.type(password, 'John12345');

// Wait for a short period to see the result (optional)
await page.waitForTimeout(2000);

const confirmPassword = 'input[name="password_confirmation"]';

// Type the password into the input field
await page.type(confirmPassword, 'John12345');

// Wait for a short period to see the result (optional)
await page.waitForTimeout(2000);

const buttonSelector = 'button.action.submit.primary[title="Create an Account"]';

await page.click(buttonSelector);

  // Wait for a short period to see the result (optional)
  await page.waitForTimeout(6000);

  
  
  });