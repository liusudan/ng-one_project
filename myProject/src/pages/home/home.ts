import { Component } from '@angular/core';
import {ActionSheetController, NavController } from 'ionic-angular';
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  detail=DetailPage;
  imgSrc="../../assets/imgs/play2.png";
  imgbool=false;
  n;
  constructor(public navCtrl: NavController,private asCtrl:ActionSheetController) {

  }
  doRefresh(dofresh){
    dofresh.complete();
  }
  playmusic(){
    var audio_bg=<HTMLAudioElement>document.getElementById("audio-bg");
    var music_img=<HTMLImageElement>document.getElementsByClassName("music-img")[0];
    if(!this.imgbool){
      this.imgSrc="../../assets/imgs/pause.png";
      this.imgbool=true;
      audio_bg.play();
      var t=2;
      this.n=setInterval(function(){
        music_img.style.transform="rotate("+t+"deg)";
        console.log(1);
        t+=2;
      },60);      
    }else{
      this.imgSrc="../../assets/imgs/play2.png";
      this.imgbool=false;
      audio_bg.pause();
      clearInterval(this.n);
    }
  }
  share(){
    var myActionCtrol=this.asCtrl.create({
      title:"请分享",
      buttons:[
        {text:'分享至朋友圈'},
        {text:'分享至qq'},
        {text:'分享至微博'},
        {text:'取消',role:'cancel'},
      ]
    });
    myActionCtrol.present()
  }
  /*
  jump(){
    this.navCtrl.push(DetailPage);
  }*/
}
