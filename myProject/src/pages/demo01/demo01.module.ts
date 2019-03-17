import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo01Page } from './demo01';

@NgModule({
  declarations: [
    Demo01Page,
  ],
  imports: [
    IonicPageModule.forChild(Demo01Page),
  ],
})
export class Demo01PageModule {}
