import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { SectionTimeComponent } from './section-time/section-time.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimeStopperComponent } from './time-stopper.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    SectionTimeComponent,
    TimeDisplayComponent,
    TimeStopperComponent,
  ],
  exports: [
    // ButtonsComponent,
    // SectionTimeComponent,
    // TimeDisplayComponent,
    //위의 component는 이 모듈 자체에서 조립이 되기 때문에 section section component에서 직접사용하게될 timestoppercomponent만 export시킨다.
    TimeStopperComponent,
  ],

  imports: [CommonModule],
})
export class TimeStopperModule {}

//buttons와 time display component를 사용해서 하나의 time-stopper라는 모듈을 만들려고 한다.
//기능적인 측면의 모듈화
