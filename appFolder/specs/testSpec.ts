import { browser } from "protractor";

describe("Test myApp", () => {
    it("Test", async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("http://www.google.com");
        console.log("testApp opened browser and passed.");
    });
});