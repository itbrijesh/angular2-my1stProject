import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>

            <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
   
}
