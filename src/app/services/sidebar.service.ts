import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SideBarService {

  public isOpen = false;
  public activitiesLogChanged = false;
  public activity;

  @Output() public change: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  public registerActivity(activity: any) {
    this.activity = activity;
    this.change.emit(true);
  }
}
