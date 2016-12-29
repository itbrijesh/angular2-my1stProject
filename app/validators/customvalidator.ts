
import { FormControl } from '@angular/forms';

export class CustomValidator {

    static validateEmail( control: FormControl ){

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value) )  
        {  
            return null;  
        } 
        else {
            return { invalidEmail: true };
        }
    }
}

