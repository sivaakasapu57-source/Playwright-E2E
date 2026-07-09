import {expect} from '@playwright/test'
export class RegisterPage{
    constructor(page){
        this.page=page;
    

    this.locators={
        firstName:"#input-firstname",
        lastName:"#input-lastname",
        email:"#input-email",
        Telephone:"#input-telephone",
        password:"#input-password",
        passwordConfirm:"#input-confirm",
        policyCheckbox:"//input[@name='agree']",
        continue:"//input[@type='submit']"
    }
}

    async navigateToApplication(){
        await this.page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
    }
    async enterFirstName(fn){
        await this.page.locator(this.locators.firstName).fill(fn);
    }

    async enterLastName(ln){
        await this.page.locator(this.locators.lastName).fill(ln);
    }

    async email(mail){
        await this.page.locator(this.locators.email).fill(mail);
    }

    async enterTelephone(number){
        await this.page.locator(this.locators.Telephone).fill(number);
    }

    async enterPassword(pword){
        await this.page.locator(this.locators.password).fill(pword);
    }
    
    async enterPasswordConfirm(pwordConfirm){
        await this.page.locator(this.locators.passwordConfirm).fill(pwordConfirm);
    }

    async checkThePolicyBox(){
        await this.page.locator(this.locators.policyCheckbox).check();
    }

    async clickOnContinue(){
        await this.page.locator(this.locators.continue);
    }
}