import { By, PageElement } from "@serenity-js/web";

export const mainPage = {
  AB_MAIN_PAGE: "A/B Testing",

  ADD_REMOVE_MAIN_PAGE: PageElement.located(
    By.xpath("//*[@id='content']/ul/li/a[@href='/add_remove_elements/']")
  ).describedAs("Add/Remove Elements main page Element"),

  AB_MAIN_PAGE1: PageElement.located(
    By.xpath("//*[@id='content']/ul/li/a[@href='/abtest']")
  ).describedAs("A/B Testing main page Element"),
};
