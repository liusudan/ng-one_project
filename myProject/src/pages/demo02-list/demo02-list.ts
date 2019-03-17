import { Component } from '@angular/core';
import {ActionSheetController,AlertController,ToastController,LoadingController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import {ListDetailPage} from '../list-detail/list-detail';
import {Demo01Page} from '../demo01/demo01';

/**
 * Generated class for the Demo02ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo02-list',
  templateUrl: 'demo02-list.html',
})
export class Demo02ListPage {
  tabHome=ListPage;
  tabCart=ListDetailPage;
  tabSetting=Demo01Page;
  mylist=[100,200,300];
  myProducts=["商品1","商品2","商品3","商品4","商品5","商品6","商品7","商品8"];
  constructor(public navCtrl: NavController, public navParams: NavParams,private loadingCtrl:LoadingController,private toastCtrl:ToastController,private alertCtrl:AlertController,private asCtrl:ActionSheetController) {
  }
  showActionSheet(){
    var myActionSheet=this.asCtrl.create({
      title:"请分享",
      buttons:[
        {text:'分享至朋友圈'},
        {text:'分享至qq'},
        {text:'分享至微博'},
        {text:'取消',role:'cancel'},
        {text:'删除',role:'destructive'},

      ]
    });
    myActionSheet.present();
  }
  showAlert(){
    var myAlert=this.alertCtrl.create({
      message:'请注意周边的安全',
      buttons:[
        {text:'OK',handler:(list)=>{
          console.log('ok button is pressed',list[0]);
        }},
        {text:"cancel"}
      ],
      inputs:[{
        placeholder:"请输入金额",
      }]
    });
    myAlert.present();
  }
  showToast(){
    //创建
    var myToast=this.toastCtrl.create({
      message:"登录成功",
      duration:1500,
      position:'middle',
      showCloseButton:true,
      closeButtonText:'关闭'
    });
    //显示
    myToast.present();
  }
  showLoading(){
    //创建窗口
    var myLoading=this.loadingCtrl.create({
      //duration:2000,
      //content:"刷新"
    });
    //显示
    myLoading.present();
    //指定定时器，每隔1s，修改loading的content
    var progress=10;
    var n=setInterval(()=>{
      myLoading.setContent("已经下载"+progress+"%")
      progress+=10;
      if(progress==100){
        myLoading.dismiss();
        clearInterval(n);
      }
    },1000)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo02ListPage');
  }
  delete(myIndex){
    this.mylist.splice(myIndex,1);
  }
  doRefresh(dofresh){
    var temList=[]
    for(var i=0;i<3;i++){
      var num=Math.floor(Math.random()*100);
      temList.push(num);
    }
    this.mylist=this.mylist.concat(temList);
    dofresh.complete()
  }
  loadMore(myInfinite){
    var temList=[]
    for(var i=0;i<3;i++){
      var num=Math.floor(Math.random()*100);
      temList.push(num);
    }
    this.mylist=this.mylist.concat(temList);
    myInfinite.complete();
  }
   putIn(){
     var myToast=this.toastCtrl;
     var myAlert=this.alertCtrl.create({
      message:'请输入手机号',
      buttons:[
        {text:'OK',handler:(list)=>{
          var mt=myToast.create({
            message:"已将验证码发送至"+list[0],
            duration:1500,
          });
          mt.present()
        }},
        {text:"cancel"}
      ],
      inputs:[{
        placeholder:"请输入手机号",
      }]
     });
     myAlert.present()
   }
}
