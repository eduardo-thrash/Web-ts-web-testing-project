import { describe, it, test } from "@serenity-js/playwright-test";
import {
  Cast,
  Notepad,
  TakeNotes,
  actorCalled,
  notes,
} from "@serenity-js/core";
import { BrowseTheWebWithPlaywright } from "@serenity-js/playwright";
import {
  Navigate,
  PageElements,
  By,
  PageElement,
  Text,
} from "@serenity-js/web";
import { Ensure, equals } from "@serenity-js/assertions";
import { exitIntentPage } from "./page_objects/exitIntentPage";

interface SharedNotes {
  abTitleElement: () => PageElements<unknown>;
  abParagraphElement: () => PageElements<unknown>;
}

describe("Todo List App with playwright + serenity", () => {
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

  it("Initial Main page title with playwright + serenity", async ({
    actor,
  }) => {
    await actor.attemptsTo(Navigate.to("https://the-internet.herokuapp.com/"));

    await actor.attemptsTo(
      Ensure.that(
        Text.of(
          PageElement.located(By.xpath("//*[@id='content']/h1")).describedAs(
            "title"
          )
        ),
        equals("Welcome to the-internet")
      )
    );
  });

  it("support multiple users with playwright + serenity", async ({ actor }) => {
    const abTitleElement = () =>
      PageElements.located(By.css("#content > div > h3")).describedAs(
        "abTitle"
      );

    const abParagraphElement = () =>
      PageElements.located(By.css('//*[@id="content"]/div/p')).describedAs(
        "abParagraph"
      );

    // Alice and Bob use separate browser windows
    const alice = actorCalled("Alice");
    alice.whoCan(BrowseTheWebWithPlaywright, TakeNotes);

    alice.attemptsTo(Navigate.to("https://the-internet.herokuapp.com/"));
    alice.attemptsTo(
      notes<SharedNotes>().set("abTitleElement", abTitleElement)
    );

    // Bob doesn't have access to the browser that Alice uses,
    // but he can access their shared notepad
    const bob = actorCalled("Bob");
    const abTitle = (await bob.answer(notes<SharedNotes>())).get(
      "abTitleElement"
    );
    console.log(abParagraphElement);
    console.log(abTitle);
  });

  it("Exit Intent page with playwright + serenity", async ({ actor }) => {
    await actor.attemptsTo(Navigate.to("https://the-internet.herokuapp.com/"));

    const exitIntentTitleMainPage = await actor.answer(
      PageElement.located(
        By.xpath("//*[@id='content']/ul/li/a[@href='/exit_intent']")
      ).describedAs("Exit intent main page title")
    );

    await exitIntentTitleMainPage.click();

    const exitIntentTitleElement = await actor.answer(
      exitIntentPage.exitIntentTitleElement
    );

    await actor.attemptsTo(
      Ensure.that(Text.of(exitIntentTitleElement), equals("Exit Intent"))
    );

    const exitIntentDescriptionElement = await actor.answer(
      exitIntentPage.exitIntentDescriptionElement
    );

    await actor.attemptsTo(
      Ensure.that(
        Text.of(exitIntentDescriptionElement),
        equals("Mouse out of the viewport pane and see a modal window appear.")
      )
    );
  });
});
