import { Component, NgModule } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  template: `
  <input type="text" [(ngModel)]="data">
  {{data}}

  <app-standalone2></app-standalone2>
  
  
  `,
  imports: [Standalone2Component, FormsModule],
  standalone: true 
})
export class StandaloneComponent {
data:any;
}
