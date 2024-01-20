import { Component } from '@angular/core';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { Standalone2Component } from './components/standalone2/standalone2.component';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="">Home</a> | 
  <a routerLink="products">Products</a> | 
  <a routerLink="customers">Customer</a> | 
  <a routerLink="standalone">Standalone</a> | 
  <a routerLink="standalone2">Standalone 2</a> | 
  <hr>
  <router-outlet></router-outlet> <br>
  `,
 
})
export class AppComponent {
  title = 'proj3';
}
