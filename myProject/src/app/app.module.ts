import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Demo01Page } from '../pages/demo01/demo01';
import { Demo02ListPage } from '../pages/demo02-list/demo02-list';
import { Demo03ModalPage } from '../pages/demo03-modal/demo03-modal';
import { Demo03PayPage } from '../pages/demo03-pay/demo03-pay';
import { DetailPage } from '../pages/detail/detail';
import { ListDetailPage } from '../pages/list-detail/list-detail';
import { LikePage } from '../pages/like/like';
import { SettingDetailPage } from '../pages/setting-detail/setting-detail';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Demo01Page,
    Demo02ListPage,
    Demo03ModalPage,
    Demo03PayPage,
    DetailPage,
    ListDetailPage,
    LikePage,
    SettingDetailPage,
    LoginPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Demo01Page,
    Demo02ListPage,
    Demo03ModalPage,
    Demo03PayPage,
    DetailPage,
    ListDetailPage,
    LikePage,
    SettingDetailPage,
    LoginPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
