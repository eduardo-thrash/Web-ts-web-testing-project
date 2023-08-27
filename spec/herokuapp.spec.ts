import { test, expect } from '@playwright/test';

test.describe('Herokuapp => Welcome to the-internet', () => {

    /*
    test.beforeAll(async ({ page }) => {
        console.log('Inicio global de suite')
        console.log('')
    })

    test.afterAll(async ({ page }) => {
        console.log('')
        console.log('Fin global de suite')
    })
    */
    
    test.beforeEach(async ({ page }) => {
        console.log('Inicio test de suite')
        await page.goto('https://the-internet.herokuapp.com/');
    });

    test.afterEach(async ({ page }) => {
        console.log('Fin test de suite')
    });

    test('A/B Testing title', async ({ page }) => {
        const element = page.getByRole('link', { name: 'A/B Testing' })
        element.click();

        await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest')

        const textBlock = await page.$('#content > div > h3');
        const text = await textBlock?.textContent();
        console.log('Text found... ', text)

        expect('A/B Test Control').toBeTruthy();
    });

    test('A/B Testing paragraph', async ({ page }) => {
        const element = page.getByRole('link', { name: 'A/B Testing' })
        element.click();

        await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest')

        const textBlock = await page.locator('//*[@id="content"]/div/p');
        const text = await textBlock?.textContent();
        console.log('Text found... ', text)

        expect(text).toContain('businesses ');
    });
});