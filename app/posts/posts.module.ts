import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsMainComponent } from './postsmain.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ PostsMainComponent ],
    exports: [ PostsMainComponent ],
    providers: []
})
export class PostsModule {

}