const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My test application', () => {

    it('Verify list items',() => {
        browser.url('/');

        const listItems = $$("ul li");

        expect(listItems).toBeElementsArrayOfSize(33);


    });

});


