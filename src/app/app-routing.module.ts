import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //해당 url이 되면 어떻게 동작시킬 건지 path와 같은 프로퍼티 설정
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
    //무조건 https://domain.com로 접근하면 , redirect를
    //https://domain.com/index로 가도록 설정한다.
  },
  {
    //위에서 index로 가라는 설정을 했기 때문에, index에 대한 path를 만든다.
    path: 'index',
    component: AppComponent,
    //https://domain.com/index로 왔을 때는 Appcomponent를 보여주라는 의미
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//forRoot는 서비스 부분에서 자세하게.
//일단, router모듈이 root 모듈에 임포트된다라고 이해한다.

//라우터 관련한 것들은 모두 이 모듈에서
//import 해서 설정값을 주고 export한다.
