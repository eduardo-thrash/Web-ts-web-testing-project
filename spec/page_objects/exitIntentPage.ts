import { By, PageElement } from "@serenity-js/web";

export const exitIntentPage = {
  exitIntentTitleElement: PageElement.located(
    By.xpath("//*[@id='content']/div[1]/h3")
  ).describedAs("exitIntentTitleElement"),

  exitIntentDescriptionElement: PageElement.located(
    By.xpath("//*[@id='content']/div[1]/p")
  ).describedAs("exitIntentDescriptionElement"),
};
