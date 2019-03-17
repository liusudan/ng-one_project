import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-like',
  templateUrl: 'like.html',
})
export class LikePage {
  myList=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient) {
  }

  ionViewDidLoad() {
    var url="http://localhost:8080/getlike";
    this.myhttp.get(url,{withCredentials:true}).subscribe((res:any)=>{
        if(res.code==300){
          this.navCtrl.push(LoginPage);
        }else{
          this.myList=res.data;
        }
        console.log(this.myList);
    })
  }
  goback(){
    this.navCtrl.pop();
  }
}
