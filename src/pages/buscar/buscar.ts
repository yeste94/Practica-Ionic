import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
/*
  Generated class for the Buscar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
const URL = 'http://127.0.0.1/PracticaIonic/getArticulos.php';
const URL_BUSCAR = 'http://127.0.0.1/PracticaIonic/getArticuloBuscar.php';
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html'
})

export class BuscarPage {
  private articulos: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {}

  ngOnInit(){
    this.listArticulos()  
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
  
  listArticulosBuscar(nombre:string){
    alert("Hol");
    this.articulos=[];
    this.http.get(URL_BUSCAR+"?nombre="+nombre).subscribe(
      subscribe => {
        let data = subscribe.json();
         console.log(data);
        for(var i=0; i<data.length; i++){
          this.articulos.push(data[i]);
          }
      },
      error => alert(error));
  }

  listArticulos(){
  	this.articulos=[];
  	this.http.get(URL).subscribe(
			subscribe => {
        let data = subscribe.json();
        for(var i=0; i<data.length; i++){
          this.articulos.push(data[i]);
          }
      },
			error => alert(error));
       		 //this.navCtrl.setRoot(Page1));
  }


}
