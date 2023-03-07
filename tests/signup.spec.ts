// import { test, expect } from '@playwright/test';

// // test('has title', async ({ page }) => {
// //   await page.goto('https://demo.seenons.com/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Seenons Waste Saver/);
// // });


// test.beforeEach(async ({ page }) => {
//   // This hook is only run in Chromium.
//   await page.goto('https://demo.seenons.com/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Seenons Waste Saver/);
// });

// test('can sign-up by valid entry', async ({ page }) => {
//   //await page.goto('https://demo.seenons.com/');

//   // Click the sign up link.
//   await page.getByRole('link', { name: 'Sign-up here!' }).click();
//   // Expects the URL to contain register.
//   await expect(page).toHaveURL(/.*register/);
//   //Enter email
//   await page.getByPlaceholder("Enter your e-mail").fill("mathuaa3@gmail.com");
//   //Check checkbox
//   await page.getByRole('checkbox', { name: '' }).check();
//   //click next button
//   await page.getByRole('button', { name: 'Next' }).click();
// //Check the password page is displayed
//   await expect(page.getByText('Choose a password')).toBeVisible();
// //enter password
// const passwordloc= await page.getByLabel('Password*', { exact: true });
// //await passwordloc.waitFor({state:"visible"})
//   await passwordloc.fill("mathu@123");
//   //enter confirm password
//   const confPwLble= await page.getByLabel("Confirm password*");
//  //await confPwLble.waitFor({state:"visible"})
//  await confPwLble.fill("mathu@123");
//   //click next button
//   await page.getByRole('button', { name: 'Next' }).click();
// //Check the name form is displayed
// await expect(page.getByText("What's your name?")).toBeVisible();

// //enter first name
// const fName= await page.getByLabel('First name*');
//   await fName.fill("mathu@123");
//   //enter last name
//   const lName= await page.getByLabel("Last name*");
//  await lName.fill("mathu@123");
//   //click register button
//   await page.getByRole('button', { name: 'Register' }).click();
// //Check page redirected to sign in success page
// await expect(page.getByText("Thanks for signing up!")).toBeVisible();
// });
