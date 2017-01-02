import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, 
         AbstractControl, Validators } from '@angular/forms';
import { CustomValidator } from '../validators/customvalidator';
import { FormComponent } from '../shared/formcomponent';
import { UsersService } from './users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { OnInit, OnDestroy } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'new-user-form',
    templateUrl: 'app/users/newuser.component.html'
})
export class NewUserComponent implements FormComponent {
    title = 'Add User';
    isLoading= true;
    myForm: FormGroup;
    form : FormGroup;
    name: AbstractControl;
    email: AbstractControl;
    subscription: any;
    userid: 0;
    user = new User();

    constructor( private fb: FormBuilder,
                 private _service: UsersService,
                 private _router: Router,
                 private _activateRouter: ActivatedRoute )
    {
        this.myForm = fb.group({
            name:  ['', Validators.required ],
            email: ['', Validators.compose( [ Validators.required, 
                        CustomValidator.validateEmail ]) ],
            phone: [''],
            address: fb.group({
                        street: [''],
                        suite: [''],
                        city: [''],
                        zipcode: ['']
            }),
            
        });

        this.name = this.myForm.controls['name'];
        this.email = this.myForm.controls['email'];
        // Added interface for Deactivated router feature (dirty checking) 
        this.form = this.myForm;
    }

    // This method will be called on click of Save button where it will check for
    // user.id and if it has some value it will do update-user otherwise add-user.

    saveUser( f: FormGroup ){
        console.log( f.value ); 

        var result: any;
        if( this.user.id )
        {
                result = this._service.updateUser( this.user ).subscribe( res => {
                        this.isLoading = false;
                        this._router.navigate(['users']);
                    }
                );
        }
        else {
                 result = this._service.addUser( this.user ).subscribe( res => {
                        this.isLoading = false;
                        this._router.navigate(['users']);
                    },
                    response => {
                        if( response.status == '404'){
                            this._router.navigate(['notfound']);
                        }
                    }
                );
        }
         
    }

    // Added for get user feature, to collect userid from url.
    ngOnInit(){
        this.subscription = this._activateRouter.params.subscribe( res => {
            this.userid = res['id'];
            console.log('User ID from URL: ' + this.userid );

        });

        if(this.userid){
                console.log( 'Getting userdetails from server...' );
                this.title = 'Edit User';
                this._service.getUser( this.userid ).subscribe(
                    res => {
                        this.user = res;
                    },
                    response => {
                        if( response.status == '404'){
                            this._router.navigate(['notfound']);
                        }
                    }
                );
            }
            else{
                console.log("NO USERID FOUND...");
                return;
            }
    }
    
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}