import {test,expect} from '@playwright/test';
import {RegisterPage} from '../Pages/RegisterPage.js';
import RegisterData from '../Fixtures/RegisterData.json'

test('Fill the Register Page',async({page})=>{
    const registerPage=new RegisterPage(page);

    await registerPage.navigateToApplication();
    await expect(page).toHaveTitle('Register Account');

    await registerPage.enterFirstName(RegisterData.firstname);
    await registerPage.enterLastName(RegisterData.lastName);
    await registerPage.email(RegisterData.email);
    await registerPage.enterTelephone(RegisterData.Telephone);
    await registerPage.enterPassword(RegisterData.password);
    await registerPage.enterPasswordConfirm(RegisterData.password);
    await registerPage.checkThePolicyBox();
    await registerPage.clickOnContinue();
    await page.pause();
})