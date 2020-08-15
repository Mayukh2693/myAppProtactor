import { browser, element, by } from "protractor";
import { Base } from "../../fmFolder/Base";
import { page } from "../pages/page";

describe("Test myApp", () => {
    it("Test", async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await browser.get("https://angular.io/");
        await Base.Waits.WaitForElementToBeVisibile(page.testPage.resourceLBL);
        await Base.Actions.ClickElement(page.testPage.resourceLBL);
        await Base.Waits.WaitForElementToBeVisibile(page.testPage.exploreAngularLBL);
        await Base.Actions.MouseHover(page.testPage.amexioLBL);
        await browser.sleep(5000);
        let attr = await Base.Actions.GetAttributeValue(page.testPage.canvasWebLBL,"class");
        console.log(attr);
        await browser.sleep(2000);
        console.log("testApp opened browser and passed...");
    });
});