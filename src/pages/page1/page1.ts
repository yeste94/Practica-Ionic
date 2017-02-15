import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { NavController } from 'ionic-angular';

const URL = 'http://127.0.0.1/PracticaIonic/getArticulos.php';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit{

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
                this.articulos.push(data[i].id);
                }
            },
			error => alert(error));
       		 //this.navCtrl.setRoot(Page1));

  }

}
