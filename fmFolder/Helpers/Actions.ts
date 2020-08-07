import { ElementFinder, browser } from "protractor";


export class Actions{

    async FindElement(loc: ElementFinder): Promise<ElementFinder> {
        try {
            let retry = 3;
            let element = null;
            do {
                try {
                    retry--;
                    await browser.sleep(1500);
                    element = await loc.getWebElement();
                } catch (error) {
                    if (retry > 0) {
                       console.log("Attempts remaining: " + retry);
                        continue;
                    } else {
                        throw error;
                    }
                }
            } while ((retry > 0) && (element == null));
            return loc;
        } catch (error) {
            throw error;
        }
    }

    async ClickElement(loc: ElementFinder){
        try{
           let element = await this.FindElement(loc);
           element.click();
           console.log(loc.locator() + " is clicked");
        } catch (error){
            console.log("ClickElement failed: " + error);
            throw error;
        }
    }
}