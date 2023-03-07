import { expect,Locator,Page } from '@playwright/test';


export class SeenonsHomePage {
  readonly url ="https://demo.seenons.com/";
  readonly page: Page;
  readonly signInCTA: Locator;
  
  
  constructor(page: Page) {
  this.page = page;
  this.signInCTA = page.getByRole('link', { name: 'Sign-up here!' });
  //this.signInCTA = page.locator('//a[text()="Sign-up here!"]');
  }
  
  async goto(){
  await this.page.goto(this.url);
  }
  async clickOnSignInCTA(){
  await this.signInCTA.waitFor({state:"visible"});
  await this.signInCTA.click();
  }
  }