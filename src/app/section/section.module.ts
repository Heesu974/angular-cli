import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './time-stopper/time-display/time-display.component';
import { ButtonsComponent } from './time-stopper/buttons/buttons.component';

import { SectionTimeComponent } from './time-stopper/section-time/section-time.component';
import { TimeStopperModule } from './time-stopper/time-stopper.module';

@NgModule({
  declarations: [SectionComponent],
  exports: [SectionComponent],
  imports: [CommonModule, TimeStopperModule],
})
export class SectionModule {}

//하나의 컨텐츠를 하나의 모듈로 관리를 하고 싶다.
