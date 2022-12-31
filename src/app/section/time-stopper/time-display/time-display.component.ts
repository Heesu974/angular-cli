import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent {
  @Input() requestFunc: any;
  minute: number = 0;
  second: number = 0;
  mSecond: number = 0;

  //시작을 누르면 시간이 카운트되도록 바꿔봅시다.
  timeInterval: any;
  timeCount() {
    this.timeInterval = setInterval(() => {
      //10ms 마다 mSecond = +1;
      this.mSecond = this.mSecond + 1;
    }, 10);
  }
  timeStop() {
    clearInterval(this.timeInterval);
  }
  timeReset() {
    this.timeStop();
    this.mSecond = 0;
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
    switch (this.requestFunc) {
      case 'start':
        this.timeCount();
        break;
      case 'stop':
        this.timeStop();
        break;
      case 'reset':
        this.timeReset();
        break;
    }
  }
}
