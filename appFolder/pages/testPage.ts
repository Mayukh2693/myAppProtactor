import { element, by } from "protractor";


export class testPage{

    public searchTXTBOX = element(by.css("[type='search']"));
    public resourceLBL = element(by.xpath("(//span[contains(text(),'Resources')])[1]"));
    public exploreAngularLBL = element(by.xpath("//h1"));
    public amexioLBL = element(by.xpath("//h4[contains(text(),'Amexio Canvas Web Based Drag and Drop IDE by MetaMagic')]"));
    public canvasWebLBL = element(by.xpath("//div/p"));
}