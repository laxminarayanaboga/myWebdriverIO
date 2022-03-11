const LoginPage = require('../pageobjects/login.page');
const MainPage = require('../pageobjects/main.page');

describe('Main Page', () => {
    it('Verify list items', async () => {
        await MainPage.open();
        const listExamples = await $$("ul li"); //findElements

        await console.log('TESTING TESTING TESTING TESTING TESTIGNG');
        await console.log(listExamples.length);

        await expect(listExamples).toBeElementsArrayOfSize(122);
        
    });
});