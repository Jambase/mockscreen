import { Injectable } from "@angular/core";
@Injectable()
export class Server{
    codetribes=[];
    details=[];
    tribeInfo={};
    constructor() {
        this.codetribes=[
            {name:'Romeo',pic:'Romeo.jpg',pc:'01',email:'romeo@mlab.co.za',age:'20',password:'romeo'},
            {name:'Sthe',pic:'Sthe.jpg',pc:'02',email:'sthe@mlab.co.za',age:'21',password:'romeo'}, 
            {name:'Neo',pic:'Neo.jpg',pc:'03',email:'neo@mlab.co.za',age:'22',password:'romeo'},
            {name:"Khensi",pic:'Nkhesani.jpg',pc:'04',email:'khesani@mlab.co.za',age:'23',password:'romeo'},
            {name:"Maria",pic:'Maria.jpg',pc:'07',email:'maria@mlab.co.za',age:'24',password:'romeo'},
            {name:"Bald",pic:"Boldwin.jpg",pc:'12',email:'bold@mlab.co.za',age:'25',password:'romeo'},
            {name:"Senzi",pic:"Senzie.jpg",pc:'06',email:'senzi@mlab.co.za',age:'26',password:'romeo'},
            {name:'Ritu',pic:'kogiso.jpg',pc:'14',email:'ritu@mlab.co.za',age:'23',password:'romeo'},
            {name:"Lwazi",pic:'Lwazi.jpg',pc:'15',email:'lwazi@mlab.co.za',age:'22',password:'romeo'},
            {name:'Carol',pic:"Carol.jpg",pc:'05',email:'carol@mlab.co.za',age:'25',password:'romeo'},
            {name:'Thuly',pic:'seth.jpg',pc:'11',email:'thuly@mlab.co.za',age:'20',password:'romeo'},
            {name:"Winnie",pic:'seth.jpg',pc:'09',email:'winnie@mlab.co.za',age:'20',password:'romeo'},
            {name:"Precia",pic:'seth.jpg',pc:'08',email:'precia@mlab.co.za',age:'24',password:'romeo'},
            {name:'Ntshuxi',pic:'seth.jpg',pc:'10',email:'ntshuxi@mlab.co.za',age:'20',password:'romeo'}
        ]
     }
     addDetail(index:number){
         this.details.push(this.codetribes[index]);
     }
     getDetails(){
         return this.details;
     }
     getCodeTribers(){
        return this.codetribes;
     }
}



