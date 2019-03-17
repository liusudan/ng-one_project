import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingDetailPage } from '../setting-detail/setting-detail';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { SigninPage } from '../signin/signin';
import { LikePage } from '../like/like';

/**
 * Generated class for the Demo01Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo01',
  templateUrl: 'demo01.html',
})
export class Demo01Page {
  signin=SigninPage;
  uname='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient) {
  }

  ionViewWillEnter(){
      var url="http://localhost:8080/getname";
      this.myhttp.get(url,{withCredentials:true}).subscribe((res:any)=>{
        console.log(res);
        if(res.code==300){
          this.uname=null;
        }else if(res.code==200){
          this.uname=res.data[0].uname;
        }
      })
  }
  toSetdetail(){
    this.navCtrl.push(SettingDetailPage);
  }
  tologin(){
    this.navCtrl.push(LoginPage);
  }
  tolike(){
    this.navCtrl.push(LikePage);
  }
}
