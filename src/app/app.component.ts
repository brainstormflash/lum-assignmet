/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';
import { SideNavComponent } from './sidenav.component';
import { SideBarService } from './services/sidebar.service';
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
    <header class="lum-flex lum-flex-navigation lum-theme-secondary-color" id="lum-site-header">
      <div id="lum-logo">
        <p>accezz<span>.io</span></p>
      </div>
      <nav class="lum-flex lum-flex-navigation" id="lum-site-navigation">
        <a [routerLink]=" ['./home'] " class="lum-link-home lum-padd-md"
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          <i class="fas fa-home"></i> <span class="lum-hide-sm lum-nav-text">Home</span>
        </a>
        <a href="#" id="lum-link-search" class="lum-padd-md">
          <i class="fas fa-search"></i>
          <span class="lum-hide-sm lum-nav-text">Search Activity</span>
        </a>
        <a [routerLink]=" ['./settings'] " id="lum-link-settings" class="lum-padd-md"
          routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
          <i class="fas fa-cog"></i> <span class="lum-hide-sm lum-nav-text">Settings</span>
        </a>
        <div class="lum-contextual">
          <a [routerLink]=" ['./signout'] " id="lum-link-signout" class="lum-padd-md"
            routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
            <i class="fas fa-power-off"></i> <span class="lum-hide-sm lum-nav-text ">Sign out</span>
          </a>

          <a href="#" id="lum-hamburger"
          (click)="onHamburgerClick($event)"
          class="lum-show-sm lum-padd-md">
            <i class="fas fa-bars"></i>
          </a>
        </div>
      </nav>
    </header>

    <main id="lum-site-content" class="lum-flex lum-flex-row-md lum-flex-col-sm">
      <section id="lum-content" class="lum-padd-md">
        <router-outlet></router-outlet>
      </section>
      <sidenav id="lum-context"></sidenav>
    </main>
  `
})
export class AppComponent implements OnInit {

  constructor(public appState: AppState,
              private sideBarService: SideBarService,
              private renderer: Renderer2) {}

  public onHamburgerClick(e) {
    this.sideBarService.toggle();
    if (this.sideBarService.isOpen) {
      this.renderer.addClass(document.body, 'sidebar-open');
    } else {
      this.renderer.removeClass(document.body, 'sidebar-open');
    }
    e.preventDefault();
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
