import { test, expect } from "@serenity-js/playwright-test";
import { urls } from "./constans/urls";
import { abtestPage } from "./page_objects/abtestPage";
import { herokuNamePages } from "./constans/herokuNamePages";
import { mainPage } from "./page_objects/mainPage";

test.describe("Herokuapp => Welcome to the-internet with playwright", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(urls.HEROKU_APP_HOST);
  });

  test.afterEach(async () => {});

  test("A/B Testing title with playwright", async ({ page }) => {
    const element = page.getByRole("link", { name: mainPage.AB_MAIN_PAGE });
    element.click();

    await expect(page).toHaveURL(
      `${urls.HEROKU_APP_HOST}${urls.HEROKU_APP_AB_RESOURCE}`
    );

    const textBlock = await page.$(abtestPage.AB_TITLE);
    const text = await textBlock?.textContent();

    console.log(text);
    expect(herokuNamePages.AB_TITLE).toBeTruthy();
  });

  test("A/B Testing paragraph with playwright", async ({ page }) => {
    const element = page.getByRole("link", { name: mainPage.AB_MAIN_PAGE });
    element.click();

    await expect(page).toHaveURL(
      `${urls.HEROKU_APP_HOST}${urls.HEROKU_APP_AB_RESOURCE}`
    );

    const textBlock = page.locator(abtestPage.AB_PARAGRAPH);
    const text = await textBlock?.textContent();

    expect(text).toContain("businesses ");
  });
});
