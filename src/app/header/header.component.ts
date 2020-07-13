import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'origin-header',
  template: `
    <div class="origin-header">
      <img src="/assets/images/logo.svg"/>
    </div>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
