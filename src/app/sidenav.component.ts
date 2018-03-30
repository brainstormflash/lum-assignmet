/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { AppState } from './app.service';
import { SideBarService } from './services/sidebar.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'sidenav',
  encapsulation: ViewEncapsulation.None,
  template: `<h1>Sidenav</h1>
    <ul>
        <li *ngFor="let item of items">
            {{ item.title }}
        </li>
    </ul>
  `
})
export class SideNavComponent implements OnInit {
  @HostBinding('class.is-open')
  public isOpen = false;

  private items: any[] = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ];
  constructor(private sideBarService: SideBarService) {}

  public ngOnInit() {
    this.sideBarService.change.subscribe((isOpen) => {
        console.log('listening');
        this.isOpen = isOpen;
    });
    console.log('Initial App State');
  }
}
