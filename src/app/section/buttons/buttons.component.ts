import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter<any>();

  start() {
    this.clickEvent.emit('count start');
  }
  stop() {
    console.log('멈춤 버튼 클릭됨');
    this.clickEvent.emit('Request for stop counting');
  }
  reset() {
    console.log('리셋 버튼 클릭 됨');
    this.clickEvent.emit('Request for reset count');
  }
}
