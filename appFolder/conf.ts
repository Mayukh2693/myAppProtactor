import { browser } from "protractor";
var HtmlReporter = require('protractor-beautiful-reporter');

let path = require('path');
exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true,  
    chromeDriver: path.resolve("./appFolder/drivers/chromedriver.exe"),
    specs: ["./specs/testSpec.js"], //Name of the Specfile
    // browser capabilities below
    multiCapabilities: [
        {
            browserName:'chrome',
            arg: ["--disable-gpu"]
        }
    ],
    // Protractor hooks
    onPrepare: ()=> {
        console.log("onPrepare");
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports'
         }).getJasmine2Reporter());
    },
    onComplete: ()=> {
        console.log("onComplete");
        browser.quit();
    },
    onCleanup: ()=> {
        console.log("onCleanup");
    }
  }
