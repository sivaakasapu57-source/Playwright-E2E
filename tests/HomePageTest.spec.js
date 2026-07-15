const{test,expect} = require('@playwright/test');

test('Home Page Test',async({page})=>{

    await page.goto('https://demoblaze.com/');

    const title=await page.title()
    console.log('Page title is ',title);

    await expect(page).toHaveURL('https://demoblaze.com/');
    await expect(page).toHaveTitle('STORE');

    await page.close()


})