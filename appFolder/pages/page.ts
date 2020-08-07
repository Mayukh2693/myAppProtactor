import { testPage } from "./testPage";


export class page{

    public static get testPage(): testPage{
        return new testPage();
    }
}