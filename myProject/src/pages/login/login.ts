import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signin=SigninPage;
  myname='';
  mypwd=""
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient,private toastctrl:ToastController) {
  }

  ionViewDidLoad() {
  }
  login(){
    var url="http://localhost:8080/login";
    this.myhttp.post(url,{uname:this.myname,upwd:this.mypwd},{withCredentials:true}).subscribe((res:any)=>{
      if(res.code==200){
        this.navCtrl.pop();
      }else{
        this.toastctrl.create({
          message:"登录失败",
          duration:1500,
        }).present();
      }
    })
  }
}
