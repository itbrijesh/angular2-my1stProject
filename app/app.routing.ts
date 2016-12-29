import { Router, RouterModule } from '@angular/router';
import { PostsMainComponent } from './posts/postsmain.component';
import { UsersMainComponent } from './users/usersmain.component';
import { NewUserComponent } from './users/newuser.component'; 
import { UnsavedGuard } from './util/unsaveguard';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

export const routing = RouterModule.forRoot( [ 
    { path: 'posts',   component: PostsMainComponent },
    { path: 'users',   component: UsersMainComponent },
    { path: 'users/newuser', component: NewUserComponent, canDeactivate: [UnsavedGuard] },
    { path: 'users/newuser/:id', component: NewUserComponent, canDeactivate: [UnsavedGuard] },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**',      component: HomeComponent }
]);
