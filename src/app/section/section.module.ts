import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './time-stopper/time-display/time-display.component';
import { ButtonsComponent } from './time-stopper/buttons/buttons.component';

import { SectionTimeComponent } from './time-stopper/section-time/section-time.component';
import { TimeStopperModule } from './time-stopper/time-stopper.module';
import { Routes, RouterModule } from '@angular/router';
import { TimeStopperComponent } from './time-stopper/time-stopper.component';

const routes: Routes = [
  {
    path: 'watch',
    component: TimeStopperComponent,
  },
];

@NgModule({
  declarations: [SectionComponent, TimeStopperComponent],
  exports: [SectionComponent, RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SectionModule {}

//하나의 컨텐츠를 하나의 모듈로 관리를 하고 싶다.

//RouterModule을 설치하면서 route에 대한 정보를 주어야 한다.
