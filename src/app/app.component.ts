import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header>
        Routing under text:
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
}