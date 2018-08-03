import { Server } from './../../servise';
import { ProfilePage } from './../profile/profile';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  tribeInfo=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private server:Server) {
    this.tribeInfo=this.server.getDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goBack(){
    this.navCtrl.push(HomePage);
    this.server.details=[];
  }
}
