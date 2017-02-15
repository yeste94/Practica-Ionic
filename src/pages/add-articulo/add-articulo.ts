import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera} from 'ionic-native';
import {Http} from '@angular/http';

/*
  Generated class for the AddArticulo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

const URL = "http://192.168.100.6/practicaionic/anadirArticulo.php";
const URL_ANADIR_ART = "";
@Component({
  selector: 'page-add-articulo',
  templateUrl: 'add-articulo.html'
})
export class AddArticuloPage {

	 public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddArticuloPage');
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image =  imageData;
    }, (err) => {
        console.log(err);
    });
  }



        anadirArticulo(nombre:string,descripcion:string,precio:number,localidad:string){
  this.http.get(URL_ANADIR_ART+"?nombre="+nombre+"&descripcion="+descripcion
                                      +"&precio="+precio+"localidad="+localidad).subscribe(
      subscribe => {
                let data = subscribe.json();
                alert(data);
            },
      error => alert(error));
              this.anadirImagen();
            //this.navCtrl.setRoot(Page1));
  }

    anadirImagen(){

  this.http.post(URL,this.base64Image).subscribe(
      subscribe => {
                alert(this.base64Image);
                 

            },

      error => alert(error)
      );
      
            //this.navCtrl.setRoot(Page1));

  }

}
