import { ElementFinder, browser } from "protractor";

// Handles all Web Actions related items
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
           await element.click();
           console.log(loc.locator() + " is clicked");
        } catch (error){
            await console.log("ClickElement failed: " + error);
            throw error;
        }
    }

    async SendKeys(loc: ElementFinder, textValue: string){
        try{
            let element = await this.FindElement(loc);
            await element.sendKeys(textValue);
            await console.log(loc.locator() + "- entered value");
        } catch (error){
            console.log("SendKeys failed: " + error);
            throw error;
        }
    }

    async GetAttributeValue(loc: ElementFinder, attributeName: string){
        try{
            let element = await this.FindElement(loc);
            let attrVal = await element.getAttribute(attributeName);
            await console.log(loc.locator() + "- attribute value");
            return attrVal;
        } catch (error){
            console.log("GetAttributeValue failed: " + error);
            throw error;
        }
    }

    async MouseHover(loc: ElementFinder){
        try{
            let element = await this.FindElement(loc);
            await browser.actions().mouseMove(element).perform();
        } catch (error){
            console.log("MouseHover failed: " + error);
            throw error;
        }
    }
}