import { protractor, ElementFinder, browser } from "protractor";
import { Base } from "../Base";
var EC = protractor.ExpectedConditions
enum TimeOuts{
    small =10000,
    large= 25000,
    extraLarge= 50000
}

// Handles all Web Explicit Wait related items
export class Waits{

    async WaitForElementToBeVisibile(loc: ElementFinder){
        try{
            let element = await Base.Actions.FindElement(loc);
            await browser.wait(EC.visibilityOf(element),TimeOuts.small);
        } catch(error){
            console.log("WaitForElementToBeVisibile failed: " + error);
            throw new Error("waitForElementToBeVisible failed: " + error);
        }
    }

    async WaitForElementToBeInvisble(loc: ElementFinder){
        try{
            let element = await Base.Actions.FindElement(loc);
            await browser.wait(EC.invisibilityOf(element),TimeOuts.small);
        } catch(error){
            console.log("WaitForElementToBeInvisble failed: " + error);
            throw new Error("waitForElementToBeInvisible failed: " + error);
        }
    }
    async WaitForElementToBeClickable(loc: ElementFinder){
        try{
            let element = await Base.Actions.FindElement(loc);
            await browser.wait(EC.elementToBeClickable(element),TimeOuts.small);
        } catch(error){
            console.log("WaitForElementToBeClickable failed: " + error);
            throw new Error("waitForElementToBeClickable failed: " + error);
        }
    }

    async WaitForElementText(loc: ElementFinder, textValue: string){
        try{
            let element = await Base.Actions.FindElement(loc);
            await browser.wait(EC.textToBePresentInElement(element, textValue),TimeOuts.small);
        } catch(error){
            console.log("WaitForElementText failed: " + error);
            throw new Error("waitForElementText failed: " + error);
        }
    }

    async WaitForElementTextValue(loc: ElementFinder, textValue: string){
        try{
            let element = await Base.Actions.FindElement(loc);
            await browser.wait(EC.textToBePresentInElementValue(element, textValue),TimeOuts.small);
        } catch(error){
            console.log("WaitForElementTextValue failed: " + error);
            throw error;
        }
    }
}