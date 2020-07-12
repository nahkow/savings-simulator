import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <origin-header></origin-header>
    <div class="origin-body">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'saving-goal-simulator';
}
