const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
   
    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
