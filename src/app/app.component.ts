import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTile}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  pageTile: string = 'Acme Product Mangement'
}