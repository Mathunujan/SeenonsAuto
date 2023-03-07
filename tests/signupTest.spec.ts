import { test, expect,Page } from '@playwright/test';
import { SeenonsHomePage } from '../pages/homePage';
import { SeenonsSignupPage } from '../pages/signupPage';
import { faker } from '@faker-js/faker';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import { testDataGenarate } from '../testData/testDataGenarate';


const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
  columns: true,
  skip_empty_lines: true
}); 

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.seenons.com/')
});


for (const record of records) {
test(`check Signups: ${record.test_case}`,async ({ page }) => {
  let email= record.test_case; //faker.internet.email();
  const homepage = new SeenonsHomePage(page);
  const signUpPage = new SeenonsSignupPage(page);

  //check Sign up page display
 await homepage.clickOnSignInCTA();
 await signUpPage.assertURL();

//Fill email form
console.log(record.test_case, record.some_value, record.some_other_value,record.fname,record.lname );
await signUpPage.EnterEmail(email);
 await signUpPage.checkCheckBox();
 await signUpPage.clickNext();

 //Check Password form display
 await signUpPage.isPwdFormVisible();

//Enter password form
await signUpPage.Enterpassword(record.some_value,record.some_other_value);
await signUpPage.clickNext();
await signUpPage.isNameFormVisible();

//Enter name form
await signUpPage.EnterName(record.fname,record.lname);
await signUpPage.clickRegister();
await signUpPage.isSuccessPageVisible();

});
}
  

// test('B can enter valid email',async ({ page }) => {
//   const signUpPage = new SeenonsSignupPage(page);
//  await signUpPage.EnterEmail();
//  await signUpPage.checkCheckBox();
//  await signUpPage.clickNext();
//  await signUpPage.isPwdFormVisible();
// });




