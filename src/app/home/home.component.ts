import {
  Component,
  OnInit
} from '@angular/core';
import { AppState } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SideBarService } from '../services/sidebar.service';

interface Activity {
  name: string;
  title: string;
  type: string;
  action: string;
  image: string;
  connected: boolean;
}

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  template: `
    <ul *ngIf="activities$ | async as activities else noData" class="lum-flex lum-activities-view">
        <li *ngFor="let item of activities" id="{{item.id}}" 
         (click)="onActivityClick($event)" class="lum-activity lum-padd-sm">
          <div class="lum-activity-inner">
            <img 
            src="../../assets/img/{{item.image}}" 
            alt="{{item.title}}"
            class="lum-activity-logo"/>
              <h2 class="lum-description">
                <span class="lum-activity-title">{{ item.title }}</span>
                <span class="lum-activity-sub-title">{{ item.type }}</span>
              </h2>
            </div>
        </li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  /**
   * Default values
   */
  public activities$: Observable<Activity[]>;
  public activities: any;
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    private http: HttpClient,
    public appState: AppState,
    private sideBarService: SideBarService
  ) {}

  public getData() {
    this.activities$ = this.http.get<Activity[]>('../../assets/activities.json');
    this.activities$.subscribe((activities) => this.activities = activities);
  }

  public getActivityById(activityId: number) {
    const needle = this.activities.filter((item) => parseInt(item.id, 10) === activityId);
    if (needle.length > 0) {
      return needle[0];
    }
    return false;
  }

  public onActivityClick(event) {
    event.stopPropagation();
    const target = event.currentTarget;
    const activityId = parseInt(target.attributes.id.nodeValue, 10);
    this.sideBarService.registerActivity(this.getActivityById(activityId));
  }

  public ngOnInit() {
    this.getData();
  }
}
