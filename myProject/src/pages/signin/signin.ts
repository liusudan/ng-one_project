import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { Demo01Page } from '../demo01/demo01';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  myname='';
  mypwd="";
  myemail="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  register(){
    var url="http://localhost:8080/register";
    this.myhttp.post(url,{uname:this.myname,upwd:this.mypwd,email:this.myemail}).subscribe((res:any)=>{
      if(res.code==200){
        this.toastCtrl.create({
          message:"注册成功",
          duration:1500,
        }).present()
        this.navCtrl.pop();
      }else{
        this.toastCtrl.create({
          message:"注册失败",
          duration:1500,
        }).present()
      }
    })
  }
}
