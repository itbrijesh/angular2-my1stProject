import { Router, RouterModule } from '@angular/router';
import { PostsMainComponent } from './posts/postsmain.component';
import { UsersMainComponent } from './users/usersmain.component';
import { HomeComponent } from './home.component';
  
export const routing = RouterModule.forRoot( [ 
    { path: 'posts', component: PostsMainComponent },
    { path: 'users', component: UsersMainComponent },
    { path: '**', component: HomeComponent }
]);
