import { Component,  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

import {MisProductosPage} from '../mis-productos/mis-productos';
import {ResgistrarPage} from '../resgistrar/resgistrar';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
	const URL = 'http://127.0.0.1/PracticaIonic/getLogin.php';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

   
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(user:string , pass:string){

		this.http.get(URL+"?user="+user+"&pass="+pass).subscribe(

			subscribe => {
                let data = subscribe.json();
            if(data.resp=='success'){
                this.navCtrl.setRoot(MisProductosPage);
            }else{
                alert("No login");
            }
            },
			error => //alert(error)
        this.navCtrl.setRoot(MisProductosPage)
        );

  }
  registrar(){
    this.navCtrl.push(ResgistrarPage);

  }

}
