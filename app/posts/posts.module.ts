import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostsMainComponent } from './postsmain.component';
import { PostsService } from './posts.service';
import { PaginationComponent } from './pagination.component';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ PostsMainComponent, PaginationComponent ],
    exports: [ PostsMainComponent, PaginationComponent ],
    providers: [ PostsService ]
})
export class PostsModule {

}