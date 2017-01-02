import { NgModule } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SpinnerComponent } from './spinner.component';
import { UnsavedGuard } from './unsaveguard';

@NgModule({
    imports:     [ CommonModule, FormsModule ],
    declarations:[ SpinnerComponent ],
    exports:     [ SpinnerComponent, CommonModule, FormsModule ],
    providers:   [ UnsavedGuard ]
})
export class SharedModule  {
}