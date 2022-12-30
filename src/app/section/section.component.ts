import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  //부모 컴포넌트의 addItem() 메서드는 인자로 받은 문자열을 items 배열에 저장합니다.
}

// 부모 컴포넌트로 데이터 전달

//자식 컴포넌트에 @Output() 데코레이터를 사용하면 부모 컴포넌트로 데이터를 전달할 수 있다.

//@Output() 데코레이터는 자식 컴포넌트의 프로퍼티 중 부모 컴포넌트로 데이터를 보내는 프로퍼티를 지정한다.

//그리고 나면 자식 컴포넌트에서 이벤트를 발생시켜, 부모 컴포넌트로 보내면 된다.
//**이벤트를 발생시키기 위해 @Output() 데코레이터는 반드시 EventEmitter 타입의 프로퍼티에 선언해야 한다. 이 커스텀 이벤트 클래스는 @angular/core 패키지에서 제공하는 클래스다. */

//이제, 자식 컴포넌트 템플릿에 있는 html input 요소에서 데이터를 받아 부모 컴포넌트로 전달하는 예제를 알아봅시다.

//목표 - 사용자가 input 요소에 문자열을 입력하고, 버튼을 선택해서, 이벤트를 발생시키면, EventEmitter를 사용해서 부모 컴포넌트로 이벤트를 전달한다.
