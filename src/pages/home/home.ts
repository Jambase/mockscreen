import { ProfilePage } from './../profile/profile';
import { DetailsPage } from './../details/details';
import { Server } from './../../servise';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tribers=[];
   constructor(public navCtrl: NavController, public NavParams: NavParams,private server:Server) {
    this.tribers=this.server.getCodeTribers();
    
     
  }

ionViewDidLoad(){
 
}
details(){
  this.navCtrl.push(DetailsPage,{
    val:'lwazi'
  })
  
}
  
  login(){
    this.navCtrl.push(LoginPage,{
      val:'lwazi'
    })
    
  }

  profile(){
    this.navCtrl.push(ProfilePage,{
      val:'lwazi'
    })
    
  }
  gotoDetail(index:number){
    this.server.addDetail(index);
    this.navCtrl.push(DetailsPage);
  }
}
