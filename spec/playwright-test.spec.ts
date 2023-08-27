import { expect, test } from '@playwright/test';
import { describe, it } from '@serenity-js/playwright-test';

test.describe('Playwright', () => {

    test('start Playwright', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        await expect(page).toHaveTitle(/Playwright/);
    })

    test('get started link', async ({ page }) => {
        await page.goto('https://playwright.dev/');
      
        const getStarted = page.getByRole('link', { name: 'Get started' });
        await getStarted.click();
      
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

        const positiveNumber = 5;
        const result = isPositive(positiveNumber);
        expect(result).toBeTruthy();
    });
})

function isPositive(number: number) {
    return number > 0;
}

/**
     * You can override the default actor name and the Serenity/JS "crew" in playwright.config.ts,
     * or in the test scenarios themselves.
     */
    // test.use({
    //     defaultActorName: 'Serena',
    //     crew: [
    //         Photographer.whoWill(TakePhotosOfFailures),
    //         // Photographer.whoWill(TakePhotosOfInteractions),
    //     ],
    // });