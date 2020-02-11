import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `<header class="app-header padding-lr-25">{{ title }}</header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'SUPPORT TICKETS MANAGER';
  @Output() toggleSidePanel: EventEmitter<any>;

  constructor() {
    this.toggleSidePanel = new EventEmitter();
  }
}