import { Component } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent {
  test = 1;

  constructor() {
    setInterval(() => {
      this.test = this.test + 1;
    }, 1000);
  }
}
