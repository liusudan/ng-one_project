import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {ListPage} from '../list/list';
import {DetailPage} from '../detail/detail';
/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {
  detail=DetailPage;
  list=ListPage;
  mylist=[];
  pno=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private myhttp:HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage');
    //发起一次网络请求，让当前的组件所属的模块依赖于httpClientModule
    this.getData();
  }
  doRefresh(dofresh){
    dofresh.complete();
  }
  loadMore(myInfinite){
    this.getData();
    myInfinite.complete();
  }
  getData(){
    this.pno++;
    var pid=this.navParams.get("pid");
    var url="http://localhost:8080/getlist?pno="+this.pno+"&pid="+pid;                         
    this.myhttp.get(url).subscribe((result:any)=>{
      var temList=result.data;
      this.mylist=this.mylist.concat(temList);
    })
  }
  goBack(){
    this.navCtrl.pop();
  }
}
