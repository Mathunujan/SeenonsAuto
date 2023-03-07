import { expect,Locator,Page } from '@playwright/test';



export class SeenonsSignupPage {
  //readonly url ="https://demo.seenons.com/";
  
  readonly page: Page;
  readonly emailTextBox: Locator;
  readonly tcCheckbox: Locator;
  readonly nextButton: Locator;
  readonly backButton: Locator;
  readonly pwPageTitle: Locator;
  readonly pwTextBox: Locator;
  readonly confPwTextBox: Locator;
  readonly namePageTitle: Locator;
  readonly registerButton: Locator;  
  readonly fName: Locator;
  readonly lName: Locator;
  readonly signinSuccessTitle: Locator;
  
  constructor(page: Page) {
  this.page = page;
  this.emailTextBox = page.getByPlaceholder("Enter your e-mail");
  this.tcCheckbox = page.getByRole('checkbox', { name: '' });
  this.nextButton = page.getByRole('button', { name: 'Next' });
  this.pwPageTitle= page.getByText('Choose a password');
  this.pwTextBox= page.getByLabel('Password*', { exact: true });
  this.confPwTextBox= page.getByLabel("Confirm password*");
  this.namePageTitle= page.getByText("What's your name?");
  this.fName= page.getByLabel('First name*');
  this.lName= page.getByLabel("Last name*");
  this.registerButton= page.getByRole('button', { name: 'Register' });
  this.signinSuccessTitle= page.getByText("Thanks for signing up!");
  }

  async assertURL(){
    await expect(this.page).toHaveURL(/.*register/);
    }

    async EnterEmail(email: string){
      this.emailTextBox.fill(email);
      }

      async Enterpassword(password: string, confPassword: string){
        await this.pwTextBox.waitFor({state:"visible"})
       this.pwTextBox.fill(password);
       await this.confPwTextBox.waitFor({state:"visible"})
       this.confPwTextBox.fill(confPassword);
        }

        async EnterName(fname: string, lname: string){
          await this.fName.waitFor({state:"visible"})
          this.fName.fill(fname);
         await this.lName.waitFor({state:"visible"})
         this.lName.fill(lname);
          }

      async checkCheckBox(){  
        this.tcCheckbox.check();
      }

      async clickNext(){
        await this.nextButton.waitFor({state:"visible"});
        this.nextButton.click();
      }

      async clickRegister(){
        await this.registerButton.waitFor({state:"visible"});
        this.registerButton.click();
      }
      async isPwdFormVisible(){
        await expect(this.pwPageTitle).toBeVisible();
      }

      async isNameFormVisible(){
        await expect(this.namePageTitle).toBeVisible();
      }

      async isSuccessPageVisible(){
        await this.registerButton.waitFor({state:"visible"});
        await expect(this.signinSuccessTitle).toBeVisible();
      }



  }