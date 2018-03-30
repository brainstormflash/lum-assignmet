/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <header class="flex flex-navigation theme-secondary-color" id="lum-site-header">
      <div id="lum-logo">
        <p>accezz<span>.io</span></p>
      </div>
      <nav class="flex flex-navigation" id="lum-site-navigation">
        <a [routerLink]=" ['./home'] " class="lum-link-home padd-md"
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          <i class="fas fa-home"></i> <span class="hide-xs nav-text">Home</span>
        </a>
        <a href="#" id="lum-link-search" class="padd-md">
          <i class="fas fa-search"></i> <span class="hide-xs nav-text ">Search Activity</span>
        </a>
        <a [routerLink]=" ['./settings'] " id="lum-link-settings" class="padd-md"
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          <i class="fas fa-cog"></i> <span class="hide-xs nav-text ">Settings</span>
        </a>
        <a [routerLink]=" ['./signout'] " id="lum-link-signout" class="padd-md"
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          <i class="fas fa-power-off"></i> <span class="hide-xs nav-text ">Sign out</span>
        </a>
      </nav>
    </header>

    <main>
      <router-outlet name="sidebar"></router-outlet>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
export class AppComponent implements OnInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
