import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent {
  @Input() item = '';

  currentItem = 'Binding data From Parent component to Child component';
}
//그 다음으로, 부모 컴포넌트 템플릿에서 프로퍼티를 바인딩해야 합니다.

//1. 부모 컴포넌트 템플릿에 자식 컴포넌트 셀렉터
//app-time-display 를 추가한다.

//4. 부모 컴포넌트 클래스에서 currentItem 값을 할당합니다.
