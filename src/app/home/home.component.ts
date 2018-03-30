import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  styleUrls: [ './home.component.css' ],
  template: `
    <h1>Home</h1>
    <ul>
        <li *ngFor="let item of items">
            {{ item.title }}
        </li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  /**
   * Default values
   */
  public localState = { value: '' };
  private items: any[] = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' }
  ];
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }
}
