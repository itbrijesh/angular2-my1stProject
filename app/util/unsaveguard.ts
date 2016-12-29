
import { FormComponent } from './formcomponent';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class UnsavedGuard implements CanDeactivate<FormComponent> {

    canDeactivate( component: FormComponent ){
        
        if( component.form.dirty )
        {
            return confirm('Hey! You forgot to save data. Do you want to continue?');
        }
        else {
            return true;
        }
    }
}