import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-time',
  templateUrl: './section-time.component.html',
  styleUrls: ['./section-time.component.css'],
})
export class SectionTimeComponent {
  minutes: number = 0;
  second: number = 0;
  msecond: number = 0;

  timeInterval: any;

  start() {
    this.timeInterval = setInterval(() => {
      this.msecond = this.msecond + 1;
    }, 10);
  }
  stop() {
    clearInterval(this.timeInterval);
  }
  reset() {
    this.stop();
    this.msecond = 0;
  }

  clickBtnHandler(btnFunc: any) {
    switch (btnFunc) {
      case 'start':
        this.start();
        break;
      case 'stop':
        this.stop();
        break;
      case 'reset':
        this.reset();
        break;
    }
  }
}
