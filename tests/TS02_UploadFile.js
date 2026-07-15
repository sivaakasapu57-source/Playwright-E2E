import {test,expect} from '@playwright/test';
import { TestMuAi } from '../Pages/TestMuAi';
const fileUpload = 'TestData/siva.pdf';

test('Upload File',async({browser})=>{
  const context= await browser.newContext();
  const page= await context.newPage();

  const muPage=new TestMuAi(page);
  await page.goto("https://www.testmuai.com/selenium-playground/");

  await page.locator("//a[text()='Upload File Demo']").click();
  console.log(await page.title());

  const chooseFile= await page.locator("#file");
  await expect(chooseFile).toBeVisible();

  await page.screenshot({
    path:'screenshots/page.png'
})


  await muPage.uploadFileDemoDocument(fileUpload)
  

})