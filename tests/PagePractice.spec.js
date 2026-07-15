import {test,expect,chromium} from '@playwright/test';

test('Get titles of the page',async()=>{
    const browser = await chromium.launch();
    const context1=await browser.newContext();
    const page1=await context1.newPage();

    const context2=await browser.newContext();
    const page2=await context2.newPage();

    await page1.goto('https://www.google.com/');
    console.log(await page1.title());

    await page2.goto('https://www.bing.com')
    console.log(await page2.title());
})