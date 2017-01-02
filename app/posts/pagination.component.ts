import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Posts } from './posts';

@Component({
    selector: 'pagination',
    template: `
    <nav *ngIf='maxPage > 1'>
        <ul class="pagination">
            <li [class.disabled]='currentPage == 1' >
                <a (click)='previous()' aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
            </li>
            <li class='pageLI' [class.active]='num == currentPage' *ngFor="let num of pages" 
                (click)='changePage(num)'>
                <a> {{ num }} <span class="sr-only">(current)</span></a> 
            </li>
            <li [class.disabled]='currentPage == maxPage'>
                <a (click)='next()' aria-label="Next"><span aria-hidden="true"> &raquo; </span></a>
            </li>
        </ul>
    </nav>
    `,
    styles: [`
            .pagination li.active { 
                background-color: #A9DBF5 !important;
                border-color: #30A5E7 !important;
                color: #30A5E7 !important;
             }
    `]
})
export class PaginationComponent implements OnChanges {
    @Input('page-size') pageSize = 10;
    @Input('items') posts: Posts[];
    @Output('page-changed') pageChanged = new EventEmitter();
    pages : any[];
    currentPage = 1;
    maxPage = 0;
    
    ngOnChanges()
    {
        if( this.posts )
        {
            var totalPages = this.posts.length / this.pageSize;
            this.maxPage = totalPages;
            this.pages = [];
            for( var i = 1; i < totalPages+1; i++ )
            {
                this.pages.push( i );
            }
        }
    }

    changePage(pageNum: number)
    {
        this.currentPage = pageNum;
        console.log( 'Inside changePage : ' + pageNum );
        this.pageChanged.emit( this.currentPage );
    }
    
    previous()
    {
        if( this.currentPage == 1 ) return;
        
        this.currentPage = this.currentPage -1;
        console.log( 'Inside previous : ' + this.currentPage );

        this.pageChanged.emit( this.currentPage );
    }

    next()
    {
        if( this.currentPage == this.maxPage ) return;

        this.currentPage = this.currentPage + 1;
        console.log( 'Inside next : ' + this.currentPage );

        this.pageChanged.emit( this.currentPage );
    }
}