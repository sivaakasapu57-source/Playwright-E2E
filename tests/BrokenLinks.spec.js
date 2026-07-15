import { test } from '@playwright/test';

test('@Smoke @Regression Find Broken Links', async ({ page, request }) => {

    await page.goto('https://playwright.dev/docs/test-assertions/');

    // Get all links
    const links = await page.locator('a').evaluateAll(elements =>
        elements.map(el => el.href)
    );

    for (const link of links) {

        if (link) {

            const response = await request.get(link);

            const status = response.status();

            console.log(`${link} --> ${status}`);
        }
    }
});