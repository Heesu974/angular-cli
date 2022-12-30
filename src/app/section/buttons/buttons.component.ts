import { Component, Output, EventEmitter } from '@angular/core';

//1. 먼저 자식 컴포넌트 클래스 파일에 Output, EventEmitter심볼을 로드한다.
// 2. 컴포넌트 클래스에서 프로퍼티에 @Output() 데코레이터를 지정합니다.

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  //여기서 EventEmitter<string>은 @Output() 데코레이터의 타입입니다.

  //new EventEmitter<string>은, 문자열 타입으로 이벤트를 전달하는 EventEmitter 인스턴스를 생성합니다.

  //3. 자식 컴포넌트에 addNewItem() 메서드를 추가합니다.
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  //click 이벤트가 바인딩된 button 엘리먼트.
  // 이 요소의 (click) 이벤트는 자식 컴포넌트 클래스의 addNewItem() 메서드와 바인딩되어 있다. addNewItem() 에서드는 #newItem.value 값을 인자로 받습니다.
}
