const { test, expect } = require('@playwright/test');

test('Verify access to the home page', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');

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
});

test('Verify "Create New Customer Account" page', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');

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
});



