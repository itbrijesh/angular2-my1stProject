import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { SharedModule  } from './shared/shared.module';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar.component'; 
import { HomeComponent } from './home.component';
import { routing } from './app.routing'
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { NotFoundComponent } from './notfound.component';
import { NumberArray } from './numberarray.pipe';
import * as _ from 'underscore';

@NgModule({
  // photoRouting should come before main/root routing.
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
                  PostsModule, UsersModule, SharedModule , routing ], 
  declarations: [ AppComponent, NavbarComponent, HomeComponent, NotFoundComponent, NumberArray ],
  providers:    [  ],
  exports : [ NumberArray ],
  schemas: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
