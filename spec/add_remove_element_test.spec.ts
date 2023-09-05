import { describe, it, test } from "@serenity-js/playwright-test";
import { Cast, Notepad, TakeNotes } from "@serenity-js/core";
import { BrowseTheWebWithPlaywright } from "@serenity-js/playwright";
import { Navigate, PageElements, Text } from "@serenity-js/web";
import { Ensure, equals } from "@serenity-js/assertions";
import { mainPage } from "./page_objects/mainPage";
import { urls } from "./constans/urls";
import { nameOptionMainPage } from "./constans/nameOptionMainPage";

interface SharedNotes {
  abTitleElement: () => PageElements<unknown>;
  abParagraphElement: () => PageElements<unknown>;
}

describe("Add/Remove Elements", () => {
  test.use({
    actors: async ({ browser, contextOptions }, use) => {
      const sharedNotepad = Notepad.empty<SharedNotes>();

      const cast = Cast.where((actor) =>
        actor.whoCan(
          BrowseTheWebWithPlaywright.using(browser, {
            ...contextOptions,
            userAgent: `${actor.name}`,
          }),
          TakeNotes.using(sharedNotepad)
        )
      );

      await use(cast);
    },
  });

  it("validate Add/Remove Elements in main page from playwright + serenity", async ({
    actor,
  }) => {
    await actor.attemptsTo(Navigate.to(urls.HEROKU_APP_HOST));

    const addRemoveElementsMainTitle = await actor.answer(
      mainPage.ADD_REMOVE_MAIN_PAGE
    );

    await actor.attemptsTo(
      Ensure.that(
        Text.of(addRemoveElementsMainTitle),
        equals(nameOptionMainPage.ADD_REMOVE_NAME_MAIN_PAGE)
      )
    );
  });

  it("validate A/B Testing in main page from playwright + serenity", async ({
    actor,
  }) => {
    await actor.attemptsTo(Navigate.to(urls.HEROKU_APP_HOST));

    const addRemoveElementsMainTitle = await actor.answer(
      mainPage.AB_MAIN_PAGE1
    );

    await actor.attemptsTo(
      Ensure.that(
        Text.of(addRemoveElementsMainTitle),
        equals(nameOptionMainPage.AB_NAME_MAIN_PAGE)
      )
    );
  });
});
