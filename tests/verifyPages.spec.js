const { test, expect } = require('@playwright/test');

// URL of the page to visit 
const targetPageUrl = 'https://magento.softwaretestingboard.com/';

test('Verify access to the home page', async ({ page }) => {
  await page.goto(targetPageUrl);

  // Wait for a short period to see the result 
  await page.waitForTimeout(2000);

  // Check if the image Luma is on the homePage
  const imageSelector = 'body > div.page-wrapper > header > div.header.content > a > img';

  // Wait for the image element to be present on the page
  await page.waitForSelector(imageSelector);

  // Check if the image is present
  const isImagePresent = await page.$(imageSelector);

  // Assert that the image is present
  expect(isImagePresent).not.toBeNull();

  console.log('Access granted')
});

test('Verify headers on the home page', async ({ page }) => {
  await page.goto(targetPageUrl);
  
  const firstHeader = await page.innerText('a[id="ui-id-3"] span:nth-child(1)');
  expect(firstHeader).toBe("What's New")

  const secondHeader = await page.innerText('a[id="ui-id-4"] span:nth-child(2)');
  expect(secondHeader).toBe('Women');

  const thirdHeader = await page.innerText('a[id="ui-id-5"] span:nth-child(2)');
  expect(thirdHeader).toBe('Men');

  const fourthHeader = await page.innerText('a[id="ui-id-6"] span:nth-child(2)');
  expect(fourthHeader).toBe('Gear');

  const fifthHeader = await page.innerText('a[id="ui-id-7"] span:nth-child(2)');
  expect(fifthHeader).toBe('Training');

  const sixthHeader = await page.innerText('a[id="ui-id-8"] span');
  expect(sixthHeader).toBe('Sale');

  console.log('Headers verified')
  });

  test('Verify search box', async ({ page }) => {
    await page.goto(targetPageUrl);
  
    const searchButton = '#search'
    
    await page.click(searchButton);
  
    await page.type(searchButton, 'breathe');

    await page.waitForTimeout(2000);
   
    const button = 'button[title="Search"]'

    await page.click(button);

    expect(await page.locator('.base').textContent()).toEqual("Search results for: 'breathe'")
  
     console.log('Search functionality works')
  });
  

test('Verify access to Create New Customer Account', async ({ page }) => {
  await page.goto(targetPageUrl);

  // Choose the "Create an account" button
  await page.click('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a');

  // Wait for a short period to see the result 
  await page.waitForTimeout(2000);

   // Check if the image for banner is on the homePage
   const imageSelector = '#maincontent > div.columns > div > div.widget.block.block-static-block > p > a > img';

   // Wait for the image element to be present on the page
   await page.waitForSelector(imageSelector);

   // Check if the image is present
   const isImagePresent = await page.$(imageSelector);
 
   // Assert that the image is present
   expect(isImagePresent).not.toBeNull();

   console.log('Create new customer page verified')
});


test('Verify access to Sign In', async ({ page }) => {
await page.goto(targetPageUrl);

   // Choose the "Sign in" button
   const signInButtonSelector = 'li.authorization-link > a';

   await page.click(signInButtonSelector);

   // Wait for a short period to see the result 
   await page.waitForTimeout(3000);

   console.log('Sign in page verified')
});





