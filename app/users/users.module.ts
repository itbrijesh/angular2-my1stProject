import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersMainComponent } from './usersmain.component'
@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ UsersMainComponent ],
    providers: [],
    exports: [ UsersMainComponent ]
})
export class UsersModule {

}