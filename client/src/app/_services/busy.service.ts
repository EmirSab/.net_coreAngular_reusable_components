import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestCount = 0;
  constructor(private spinerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinerService.show(undefined, {
      type: "line-scale-party",
      size: "large",
      bdColor: "rgba(0, 0, 0, 1)",
      color: "white"
    })
  }

  idle() {
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinerService.hide();
    }
  }
}
