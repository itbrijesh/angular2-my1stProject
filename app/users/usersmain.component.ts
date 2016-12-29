
import { Component } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import { UsersService } from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html'
})
export class UsersMainComponent {
    users: {};
    isLoading = true;

    constructor( private _service: UsersService){
        _service.getUsers().subscribe(
            res => {
                this.users = res;
                console.log( 'List of users from server: ' + this.users );
                this.isLoading = false;
            }
         );
        
    }
}

