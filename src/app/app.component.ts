import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="">Home</a> | 
  <a routerLink="products">Products</a> | 
  <a routerLink="customers">Customer</a> | 
  <hr>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'proj3';
}
