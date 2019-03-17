import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Demo01Page } from '../demo01/demo01';

/**
 * Generated class for the SettingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-detail',
  templateUrl: 'setting-detail.html',
})
export class SettingDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingDetailPage');
  }
  logout(){
    this.myhttp.get("http://localhost:8080/logout",{withCredentials:true}).subscribe((res:any)=>{
      if(res.code==200){
         this.navCtrl.push(Demo01Page);
      }
    })
  }

}
