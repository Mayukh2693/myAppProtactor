import { Actions } from "./Helpers/Actions";
import { Waits } from "./Helpers/Waits";

// Base class for Framework related files
export class Base{
    
    public static get Actions(): Actions{
        return new Actions();
    }
    public static get Waits(): Waits{
        return new Waits();
    }
}