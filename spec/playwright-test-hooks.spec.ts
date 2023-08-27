import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({ page }) => {
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});