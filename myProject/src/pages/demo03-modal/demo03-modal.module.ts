import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo03ModalPage } from './demo03-modal';

@NgModule({
  declarations: [
    Demo03ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo03ModalPage),
  ],
})
export class Demo03ModalPageModule {}
