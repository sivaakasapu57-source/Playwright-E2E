# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TS02_UploadFile.spec.js >> Upload File
- Location: tests\TS02_UploadFile.spec.js:5:5

# Error details

```
TypeError: _TestMuAi.TestMuAi is not a constructor
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { TestMuAi } from '../Pages/TestMuAi';
  3  | const fileUpload = 'TestData/siva.pdf';
  4  | 
  5  | test('Upload File',async({browser})=>{
  6  |   const context= await browser.newContext();
  7  |   const page= await context.newPage();
  8  | 
> 9  |   const muPage=new TestMuAi(page);
     |                ^ TypeError: _TestMuAi.TestMuAi is not a constructor
  10 |   await page.goto("https://www.testmuai.com/selenium-playground/");
  11 | 
  12 |   await page.locator("//a[text()='Upload File Demo']").click();
  13 |   console.log(await page.title());
  14 | 
  15 |   const chooseFile= await page.locator("#file");
  16 |   await expect(chooseFile).toBeVisible();
  17 | 
  18 |   await page.screenshot({
  19 |     path:'screenshots/page.png'
  20 | })
  21 | 
  22 | 
  23 |   await muPage.uploadFileDemoDocument(fileUpload)
  24 |   
  25 | 
  26 | })
```