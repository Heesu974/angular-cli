import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent {
  @Input() inputData: any;

  //자식 컴포넌트는 부모 컴포넌트로부터 데이터를 언제 받았는지 알 수 있는데,
  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }
  //위의 method는 우리가 이 클래스를 @Component() 데코레이터로 꾸미고 있기 때문에 사용할 수 있는 method입니다.
}
