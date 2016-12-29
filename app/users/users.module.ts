import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersMainComponent } from './usersmain.component';
import { NewUserComponent } from './newuser.component';
import { UsersService } from './users.service';

@NgModule({
    imports: [ FormsModule, CommonModule, ReactiveFormsModule ],
    declarations: [ UsersMainComponent, NewUserComponent ],
    providers: [ UsersService ],
    exports: [ UsersMainComponent, NewUserComponent ]
})
export class UsersModule {

}