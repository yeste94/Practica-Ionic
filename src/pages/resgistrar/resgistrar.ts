import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
/*
  Generated class for the Resgistrar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
const URL="";
@Component({
  selector: 'page-resgistrar',
  templateUrl: 'resgistrar.html'
})

export class ResgistrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {}




        anadirUsuario(nick:string,correo:string,pass:string){
  this.http.get(URL+"?nick="+nick+"&correo="+correo+"&pass="+pass).subscribe(
      subscribe => {
                let data = subscribe.json();
                alert(data);
            },
      error => alert(error)
      );
            //this.navCtrl.setRoot(Page1));
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ResgistrarPage');
  }

}
