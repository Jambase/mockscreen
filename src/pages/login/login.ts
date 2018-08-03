import { DetailsPage } from './../details/details';
import { ProfilePage } from './../profile/profile';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    preferences: {

    }

  }

  userFG: FormGroup;

  constructor(public navCtrl: NavController,private fb:FormBuilder) {
    this.userFG = new FormGroup({
      name: new FormControl('Lwazi'),
      username: new FormControl('Jambase'),
      email: new FormControl('jambilwahg@mlab.co.za'),
      password: new FormControl('123456'),
      preferences: new FormGroup({
        date: new FormControl(),
        skill: new FormControl('ionic')
      })
    })

  this.userFG = this.fb.group({
    name:['Lwazi',[Validators.required,Validators.minLength(5)]],
    username:['Jambase',[Validators.required,Validators.minLength(5)]],
    email:['jambilwahg@mlab.co.za',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.maxLength(10)]],
    preferences:this.fb.group({
      date:[''],
      skill:['ionic']
    })
  })
 
   }

  submit() {
    console.log(this.user);
  }

  formSubmit({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log(valid);
   
  }
  
  homep(){
    this.navCtrl.push(HomePage,{
      val:'tongo'
    })
  }
  profile(){
    this.navCtrl.push(ProfilePage,{
      val:'jambi'
    })
  }
}

export interface User{
  username:string;
  email:string;
  password:string;
  preferences:{
    date:Date,
    notes:string
  }
}