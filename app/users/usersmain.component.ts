
import { Component } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import { UsersService } from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html'
})
export class UsersMainComponent  {
    
    users: any[];
    isLoading = true;
    

    constructor( private _service: UsersService ){
        _service.getUsers().subscribe(
            res => {
                this.users = res;
                console.log( 'List of users from server: ' + this.users );
                this.isLoading = false;
            }
         );
    }

    delete( user: any ){

        if( confirm("Do you want to delete user - "+user.name+" ?") )
        {
            var index = this.users.indexOf(user);
            // this will remove one object from the specified index
            this.users.splice(index,1);

            this._service.deleteUser(user.id).subscribe(
                null,
                error => {
                    alert('Sorry, cound not delete the data.');
                    this.users.splice(index, 0, user );
                }
            );
        }
    }
    
}

