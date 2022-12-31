import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter<any>();

  start() {
    this.clickEvent.emit('change!');
  }
}

// clickEvent를 통해서 부모한테 데이터를 바인딩하고,
// section Component가 다시 time-display 자식 컴포넌트에 데이터를 바인딩하는 것이 목표이다.

// 자식 컴포넌트가 부모 데이터로부터 데이터를 받기 위해서는 @Input() 데코레이터를 사용
