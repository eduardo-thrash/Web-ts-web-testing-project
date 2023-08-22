import { describe, it } from '@serenity-js/playwright-test';

describe('Recording items', () => {

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

    describe('Todo List App', () => {

        it('should allow me to add todo items', async ({ actor }) => {
            console.log('console test should allow me to add todo items')
        });

        it('should clear text input field when an item is added', async ({ actor }) => {
            console.log('console test should clear text input field when an item is added')
        });

        it('should reflect the number of items left in the counter', async ({ actor }) => {
            console.log('console test should reflect the number of items left in the counter')
        });

        it('should show #main and #footer sections only when list contains items', async ({ actor }) => {
            console.log('console test should show #main and #footer sections only when list contains items')
        });
    });
});