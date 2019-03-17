import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo03PayPage } from './demo03-pay';

@NgModule({
  declarations: [
    Demo03PayPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo03PayPage),
  ],
})
export class Demo03PayPageModule {}
