
import TelerikPage from "../pageObjects/telerik.page";

describe("The select Wrapper: Selecting from List and Combobox", () => {
    it("Chapter 7: Select Item Out of View", async () => {

        // Navigate to a sample weblist
        await WebListPage.open("components/dropdowns/autocomplete/");
        // this handles the cookie popup if required
        let cookie = await browser.$('[id="onetrust-accept-btn-handler"]')

        await browser.pause(500);

        if (await cookie.isExisting() === true) {
            await cookie.click();
        }

        await browser.pause(500);

        let elem = await browser.$('[class="link-sc-6kfngc-0 HwYv"]')
        await elem.scrollIntoView();

        // This gets you into the iFrame
        const iframe = await browser.findElement('css selector', 'iframe');
        await browser.switchToFrame(iframe);

        // This scrolls the page
        let input = await browser.$('//input[contains(@class,"input")]')
        await input.scrollIntoView();
        await browser.pause(500);
        await input.clearValue();
        await input.setValue("sw"); // Sw... Switzerland
    
        let itmTurkey = await browser.$('//span[contains(text(),"Turk")]')
        let itmSwitzerland = await browser.$('//span[contains(text(),"Switz")]')
        
        if (await itmTurkey.isExisting() === true) {
            await itmTurkey.click();
        }

        await input.clearValue();
        await input.setValue("al"); // Albania
        if (await itmSwitzerland.isExisting() === true) {
            await itmSwitzerland.click();
        }

    });

    it("Chapter 7: Select from a Combo Box", async () => {
        let elem;
        // Navigate to a sample combobox weblist
        await TelerikPage.open("components/dropdowns/combobox/");
        await TelerikPage.selectSport("Cricket");
    });

    it("Chapter 7: Selecting from a AutoComplete list", async () => {
        let elem;
        // Navigate to a sample weblist
        await TelerikPage.open("components/dropdowns/autocomplete/");
        await TelerikPage.selectCountry("Denmark");
    });
});