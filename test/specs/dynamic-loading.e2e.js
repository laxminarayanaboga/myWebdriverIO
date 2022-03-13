const dynamicLoadingPage = require("../pageobjects/dynamic.loading.page");

describe('Dynamic Loading Page', () => {
    it('wait for hidden element to show', async () => {
        await dynamicLoadingPage.open();

        await dynamicLoadingPage.firstElementOnPage.waitForClickable();
        console.log('first element link is displayed');
        (await dynamicLoadingPage.firstElementOnPage).click();
        console.log('clicked on first element link');

        await dynamicLoadingPage.startButton.waitForClickable();
        console.log('start button is displayed')
        await (await dynamicLoadingPage.startButton).click();
        console.log('clicked on the start button')

        await dynamicLoadingPage.loadingImage.waitForDisplayed();
        console.log('loading image is displayed')
        await dynamicLoadingPage.loadingImage.waitForDisplayed({reverse: true});
        console.log('loading image is hidden')

        await dynamicLoadingPage.helloWorldText.waitForDisplayed();
        console.log('Hellow World element is displayed')
        await expect(await dynamicLoadingPage.helloWorldText.getText()).toEqual("Hello World!");
        console.log('End of test script')

    });
});