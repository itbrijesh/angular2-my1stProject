import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar.component'; 
import { HomeComponent } from './home.component';
import { routing } from './app.routing'
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@NgModule({
  // photoRouting should come before main/root routing.
  imports:      [ BrowserModule, PostsModule, UsersModule, routing ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent ],
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
