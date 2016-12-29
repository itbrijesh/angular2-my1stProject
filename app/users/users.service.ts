
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

@Injectable()
export class UsersService {

    private _url = "http://jsonplaceholder.typicode.com/users";

    constructor( private _http: Http ) {
    }

    getUsers(): Observable<User[]>{
        return this._http.get( this._url ).map( res => res.json() );
    }

    addUser(user:any) {
        return this._http.post(this._url, JSON.stringify(user) )
                         .map( res => res.json );
    }
}

