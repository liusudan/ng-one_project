import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo02ListPage } from './demo02-list';

@NgModule({
  declarations: [
    Demo02ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo02ListPage),
  ],
})
export class Demo02ListPageModule {}
