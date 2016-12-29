import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
            <div class='container'>
                <router-outlet></router-outlet>
            </div>
            
  `,
})
export class AppComponent  { 
   
}
