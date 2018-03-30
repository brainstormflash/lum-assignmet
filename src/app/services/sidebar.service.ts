import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class SideBarService {

  public isOpen = false;

  @Output() public change: EventEmitter<boolean> = new EventEmitter();

  public toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }
}
