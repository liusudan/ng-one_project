import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  mydata=[];
  imglist="../../assets/imgs/islike.png";
  islike=false;
  constructor(private myhttp:HttpClient,public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    var id=this.navParams.get("lid");
    var url="http://localhost:8080/getdetail?lid="+id;
    this.myhttp.get(url,{withCredentials:true}).subscribe((res:any)=>{
      this.mydata=res.data[0];
      if(res.code==202){
         this.imglist="../../assets/imgs/like.png";
         this.islike=true;
      }
    })
  }
  likeIt(){
    if(!this.islike){
      var id=this.navParams.get("lid");
      var url="http://localhost:8080/addlike?lid="+id;
      this.myhttp.get(url,{withCredentials:true}).subscribe((res:any)=>{
        if(res.code==200){
          this.imglist="../../assets/imgs/like.png"
          this.islike=true;
        }else if(res.code==300){
          this.navCtrl.push(LoginPage);
        }else{
          this.toastCtrl.create({
            message:"收藏失败",
            duration:2000
          }).present()
        }
      })
    }else{
      var lid=this.navParams.get("lid");
      var url2="http://localhost:8080/deletelike?lid="+lid;
      this.myhttp.get(url2,{withCredentials:true}).subscribe((res:any)=>{
        if(res.code==200){
          this.imglist="../../assets/imgs/islike.png";
          this.islike=false;
        }else if(res.code==300){
          this.navCtrl.push(LoginPage);
        }else{
          this.toastCtrl.create({
            message:"移除收藏失败",
            duration:2000
          }).present()
        }
      })
    }
  }
  goBack(){
    this.navCtrl.pop();
  }

}
