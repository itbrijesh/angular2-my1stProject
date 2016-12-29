import { Router, RouterModule } from '@angular/router';
import { PostsMainComponent } from './posts/postsmain.component';
import { UsersMainComponent } from './users/usersmain.component';
import { NewUserComponent } from './users/newuser.component'; 
import { UnsavedGuard } from './util/unsaveguard';
import { HomeComponent } from './home.component';
  
export const routing = RouterModule.forRoot( [ 
    { path: 'posts',   component: PostsMainComponent },
    { path: 'users',   component: UsersMainComponent },
    { path: 'users/newuser', component: NewUserComponent, canDeactivate: [UnsavedGuard] },
    { path: '**',      component: HomeComponent }
]);
