import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-cesium></app-cesium>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      background-color: #f2f2f2 !important;
    }
  `]
})
export class AppComponent {
  title = 'angular-cesium';
}
