const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
   
    open () {
        return super.open('dynamic_loading');
    }

    get firstElementOnPage(){
        return $('//a[text()="Example 1: Element on page that is hidden"]');
    }

    get startButton(){
        return $('//div[@id="start"]/button[text()="Start"]');
    }

    get loadingImage(){
        return $('//div[@id="loading"]/img');
    }

    get helloWorldText(){
        return $('//div[@id="finish"]/h4[text()="Hello World!"]');
    }

}

module.exports = new DynamicLoadingPage();
