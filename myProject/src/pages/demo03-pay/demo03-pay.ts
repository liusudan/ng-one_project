import { Component } from '@angular/core';
import { ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo03PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo03-pay',
  templateUrl: 'demo03-pay.html',
})
export class Demo03PayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo03PayPage');
  }
  closeModal(){
    this.viewCtrl.dismiss(0);
  }
}
