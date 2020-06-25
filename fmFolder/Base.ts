import { Actions } from "./Helpers/Actions";


export class Base{
    
    public static get Actions(): Actions{
        return new Actions();
    }
}