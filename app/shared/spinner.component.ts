import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template:`
            <div *ngIf='isLoading' >
                <i class="fa fa-spinner fa-spin fa-8x"></i>
            </div>
    `
})
export class SpinnerComponent {

    @Input('visible') isLoading = true; 
}