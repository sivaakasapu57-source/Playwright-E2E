import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{
    await page.goto('https://demoblaze.com/');

    const title=await page.title()
    console.log(title)
    await expect(page).toHaveTitle('STORE')

    //Click on Login Button
    await page.click('id=login2')
    await page.fill('id=loginusername','Sivaveera')
    await page.fill('#loginpassword','Siva')
    await page.click("//button[text()='Log in']")
    //await page.pause()

    const logOut=await page.locator('#logout2');
    await expect(logOut).toBeVisible();

    const products= await page.$$("//div[@id='tbodyid']//div//h4//a");

    for(const product of products){
        const name=await product.textContent();
        console.log(name);
    }


})