import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';

import {AddArticuloPage} from '../add-articulo/add-articulo';
import {DescripcionPage} from '../descripcion/descripcion';
/*
  Generated class for the MisProductos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

const URL = 'http://localhost/PracticaIonic/getArticulos.php';

@Component({
  selector: 'page-mis-productos',
  templateUrl: 'mis-productos.html'
})
export class MisProductosPage {

	private articulos: string[];

  constructor(public navCtrl: NavController, private http:Http) {}

 ngOnInit(){
    this.listArticulos()  
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
  AddArticulo(){
    this.navCtrl.push(AddArticuloPage);
  }

  desArticulo(id:string){
    this.navCtrl.push(DescripcionPage,{id:id});
  }
}
