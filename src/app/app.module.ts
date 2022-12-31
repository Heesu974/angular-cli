import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-stopper/time-display/time-display.component';
import { ButtonsComponent } from './section/time-stopper/buttons/buttons.component';
import { SectionTimeComponent } from './section/time-stopper/section-time/section-time.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//헤더와 푸터같은 경우, 레이아웃을 담당하고 있습니다.

// layout module과 layout을 담당하는 component를 모아둔 모듈

// routing을 담당하는 애들을 모아둔 모듈
