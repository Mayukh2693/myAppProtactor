import { browser } from "protractor";

let path = require('path');
exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true,  
    chromeDriver: path.resolve("./appFolder/drivers/chromedriver.exe"),
    specs: ["./specs/testSpec.js"], //Name of the Specfile
    multiCapabilities: [
        {
            browserName:'chrome'
        }
    ],
    onPrepare: ()=> {
        console.log("onPrepare");
    },
    onComplete: ()=> {
        console.log("onComplete");
        browser.quit();
    }
    ,
    onCleanup: ()=> {
        console.log("onCleanup");
    }
  }
