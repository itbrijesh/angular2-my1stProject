import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { PostsService } from './posts.service';
import { User } from '../users/user';
import { UsersService } from '../users/users.service';
import { PaginationComponent } from './pagination.component';
//import * as _ from 'underscore';

@Component({
    selector: 'posts',
    //template: '<pagination></pagination>',
    templateUrl: 'app/posts/posts.component.html',
    styles: [`
              .postsStyle li { cursor: default; }
              
              .postsStyle li:hover { background-color: #A9DBF5; }
              
              .list-group-item.active,
              .list-group-item.active:hover,
              .list-group-item.active:focus {
                  background-color: #A9DBF5;
                  border-color: #30A5E7;
                  color: #30A5E7;
              }

              .bgcolor { background-color: #A9DBF5 !important }

              .mediaImg { border-radius: 50%; }
    `],
    
})
export class PostsMainComponent implements OnInit {
    isLoading = true;
    posts: Posts[];
    postbody: string;
    panelTitle: string;
    panelBody: string;
    currentPost: Posts;
    comments: Posts[];
    users: User[];
    user: User;
    pageSize = 10;
    pagedPosts: Posts[];
   
    constructor(private _service: PostsService,
                private _userService: UsersService ) {
    }

    ngOnInit(){
        this.prepareUserList();
        this.getAllPosts();
    }
    
    prepareUserList() {
        this._userService.getUsers().subscribe(
            data => {
                this.users = data;
            },
            error => {
                alert('Error while collecting data...');
            }
        );
    }

    showPostDetail(post: Posts){
        this.panelTitle = post.title;
        this.panelBody = post.body;
        this.currentPost = post;

        this._service.getComments( ''+ post.id ).subscribe( 
            res => {
                this.comments = res;
            },
            error => {
                alert('Error while loading comments !');
            }
         );
    }

    showPosts(userid: number)
    {
        console.log( userid );
        if( userid == 0 ){
            this.getAllPosts();
            this.panelTitle = '';
            return;
        }
        this._service.getPostsOfUser(+userid).subscribe( 
            data => {
                    this.posts = data;
                    this.pagedPosts = _.take( data, this.pageSize );
                    this.isLoading = false;
            },
            error => {
                     alert('Error while loading comments !');
            }
         )
    }

    getAllPosts()
    {
        this._service.getPosts().subscribe(
            res => {
                    this.posts = res;
                    this.pagedPosts = _.take( res, this.pageSize );
            },
            error => {
                alert ('Error while collecting all posts.');
            }
        );
    }

    OnPageChanged(event: any){
        console.log( 'On Page Change Event >> ' + event );

        //this.showPosts( event );
        var startIndex = (event - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    }
}