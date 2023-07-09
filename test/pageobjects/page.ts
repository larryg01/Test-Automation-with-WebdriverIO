<<<<<<< Updated upstream
=======
//import {browser, $} from '@wdio/globals';
>>>>>>> Stashed changes
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
<<<<<<< Updated upstream
=======

    public async getUrlAdv (path: string) {
        let thisUrl = await browser.url;
    }



>>>>>>> Stashed changes
}
