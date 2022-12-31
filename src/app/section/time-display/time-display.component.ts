import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent {
  @Input() countReady: any;
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
  clearTimeCount() {
    clearInterval(this.timeInterval);
  }
  ngOnChanges(changes: SimpleChange) {
    console.log(this.countReady);
    if (this.countReady === 'count start') {
      this.timeCount();
    } else if (this.countReady === 'Request for stop counting') {
      this.clearTimeCount();
    } else if (this.countReady === 'Request for reset count') {
      this.clearTimeCount();
      this.minute = 0;
      this.second = 0;
      this.mSecond = 0;
    }
  }
}
