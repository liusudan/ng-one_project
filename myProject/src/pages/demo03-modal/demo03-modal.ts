import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo03PayPage} from '../demo03-pay/demo03-pay';
/**
 * Generated class for the Demo03ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo03-modal',
  templateUrl: 'demo03-modal.html',
})
export class Demo03ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo03ModalPage');
  }
  showModal(){
    //希望在点击在线支付时，创建一个模态窗口，模态窗口的视图内容为demo12paypage
    var myModal=this.modalCtrl.create(Demo03PayPage);
    myModal.present();
    //准备接受模态窗口视图在关闭后传回来的数据
    myModal.onDidDismiss((data)=>{
      console.log(data);
    })
  }
}
