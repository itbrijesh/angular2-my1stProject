import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, 
         AbstractControl, Validators } from '@angular/forms';
import { CustomValidator } from '../validators/customvalidator';
import { FormComponent } from '../util/formcomponent';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'new-user-form',
    templateUrl: 'app/users/newuser.component.html'
})
export class NewUserComponent implements FormComponent {

    isLoading= true;
    myForm: FormGroup;
    name: AbstractControl;
    email: AbstractControl;
    form : FormGroup;

    constructor( private fb: FormBuilder,
                 private _service: UsersService,
                 private _router: Router )
    {
        this.myForm = fb.group({
            name:  ['', Validators.required ],
            email: ['', Validators.compose( [ Validators.required, 
                        CustomValidator.validateEmail ]) ],
            phone: [''],
            address: fb.group({
                        street: [''],
                        suit: [''],
                        city: [''],
                        zipcode: ['']
            }),
            
        });
        this.name = this.myForm.controls['name'];
        this.email = this.myForm.controls['email'];
        
        // Added interface for Deactivated router feature (dirty checking) 
        this.form = this.myForm;
    }

    saveUser( f: FormGroup ){
        console.log( f.value );
        this._service.addUser( f.value ).subscribe(
            res => {
                this.isLoading = false;
                this._router.navigate(['users']);
            }
        );
    }
}