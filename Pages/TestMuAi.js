import { expect } from '@playwright/test';

export class TestMuAi{
    constructor(page){
        this.page=page;

        this.locators={
            uploadFileDemo:"//a[text()='Upload File Demo']"
        }
    }
    async uploadFileDemoDocument(file){
        await this.page.locator(this.locators.uploadFileDemo).setInputFiles(file)
    }
}