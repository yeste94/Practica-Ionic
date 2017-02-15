import { Component,  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

import {MisProductosPage} from '../mis-productos/mis-productos';
import {ResgistrarPage} from '../resgistrar/resgistrar';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
	const URL = 'http://localhost/PracticaIonic/getLogin.php';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

   
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Usuario o contraseña incorrecto',
      buttons: ['OK']
    });
    alert.present();
  }

    ErrorCon() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Error de conexion',
      buttons: ['OK']
    });
    alert.present();
  }

  login(user:string , pass:string){

		this.http.get(URL+"?user="+user+"&pass="+pass).subscribe(

			subscribe => {
                let data = subscribe.json();
            if(data.resp=='success'){
                this.navCtrl.setRoot(MisProductosPage);
            }else{
                this.loginAlert();
            }
            },
			error => this.ErrorCon()
            //this.navCtrl.setRoot(MisProductosPage)
        );

  }
  registrar(){
    this.navCtrl.push(ResgistrarPage);

  }

}
