import { test, expect } from '@playwright/test';

test('Find broken links', async ({ page, request }) => {

    await page.goto('https://demo.nopcommerce.com/');

    const links = await page.locator('a').evaluateAll(elements =>
        elements.map(el => el.href)
    );

    console.log(`Total links found: ${links.length}`);

    for (const link of links) {

        // Skip empty or external links
        if (
            !link ||
            link.startsWith('javascript') ||
            !link.includes('demo.nopcommerce.com')
        ) {
            continue;
        }

        try {

            const response = await request.get(link, {
                timeout: 10000
            });

            const status = response.status();

            if (status >= 400) {
                console.log(`Broken Link: ${link} --> Status: ${status}`);
            } else {
                console.log(`Valid Link: ${link} --> Status: ${status}`);
            }

        } catch (error) {

            console.log(`ERROR accessing ${link}`);
        }
    }
});