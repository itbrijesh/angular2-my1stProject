import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Posts } from './posts';

@Injectable()
export class PostsService {

    url = 'http://jsonplaceholder.typicode.com/posts';
    
    constructor( private _http: Http ) {
    }
    
    getPosts(): Observable<Posts[]>{
        return this._http.get( this.url ).map( res => res.json() );
    }

    getPostsOfUser(userId: number): Observable<Posts[]>{
        console.log('Calling REST API to collect list of post for the userId : ' + userId );
        return this._http.get( this.url + '?userId=' + userId ).map( res => res.json() );
    }

    getPost(postid: string): Observable<Posts>{
        return this._http.get( this.url + "/" + postid ).map( res => res.json() );
    }

    getComments(postid: string): Observable<Posts[]> {
        return this._http.get( this.url + '/' + postid + '/' + 'comments' ).map( res => res.json() );
    }


}

