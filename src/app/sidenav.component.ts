/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { AppState } from './app.service';
import { SideBarService } from './services/sidebar.service';

interface Activity {
  name: string;
  title: string;
  type: string;
  action: string;
  image: string;
  connected: boolean;
}
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'sidenav',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div id="lum-sidenav-inner" class="lum-marg-md">
    <h2 class="lum-sidenav-title">Activities</h2>
    <ul id="lum-activity-log">
        <li *ngFor="let item of activities" class="lum-activity-log-item">
          <span class="lum-activity-icons">
            <i class="fa fa-{{item.device}} lum-activity-device"></i>
            <i class="fab fa-{{item.browser}} lum-activity-browser"></i>
          </span>
          <div class="lum-activity-info">
            <div class="lum-activity-title">{{ item.title }}</div>
            <div class="lum-activity-date">{{item.log_ts | date:'fullDate'}}</div>
          </div>
        </li>
    </ul>
    </div>
  `
})
export class SideNavComponent implements OnInit {
  @HostBinding('class.is-open')
  public isOpen: boolean = false;
  public activities: any[] = [];

  constructor(private sideBarService: SideBarService) {}

  public ngOnInit() {
    this.sideBarService.change.subscribe((isOpen) => {
        this.isOpen = isOpen;
    });

    this.sideBarService.change.subscribe((activitiesLog) => {
      const activity = Object.assign({}, this.sideBarService.activity);
      activity.log_ts = Date();
      activity.device = this.getRandomDevice();
      activity.browser = this.getRandomBrowser();
      this.activities.push(activity);
  });
  }
  private getRandom(stack) {
    return stack[Math.floor(Math.random() * stack.length)];
  }

  private getRandomDevice() {
    return this.getRandom(['mobile', 'tablet', 'laptop']);
  }

  private getRandomBrowser() {
    return this.getRandom(['internet-explorer', 'chrome', 'safari']);
  }
}
