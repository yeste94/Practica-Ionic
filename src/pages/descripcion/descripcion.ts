import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform} from 'ionic-angular';
import {Http} from '@angular/http';

  
import {Geolocation,GoogleMap, GoogleMapsEvent,GoogleMapsLatLng,CameraPosition,GoogleMapsMarkerOptions, GoogleMapsMarker} from 'ionic-native';

/*
  Generated class for the Descripcion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
const URL='http://localhost/PracticaIonic/getDescripcion.php';
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html'
})
export class DescripcionPage {


map:any;

 @ViewChild('map') mapElement: ElementRef;
 
   id:string;
    private articulos: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, private platform: Platform) {


    this.id= navParams.get('id');
  }

 ngOnInit(){
   this.obtenerPosicion();
    this.listArticulos()  
  }
   

  listArticulos(){
          this.articulos=[];
          this.http.get(URL+"?id="+this.id).subscribe(
      subscribe => {
                let data = subscribe.json(); 
                for(var i=0; i<data.length; i++){
                this.articulos.push(data[i]);
                }
                
            },
      error => alert(error));
            //this.navCtrl.setRoot(Page1));

  }
obtenerPosicion():any{
  Geolocation.getCurrentPosition().then(res => {
    console.log(res.coords);
    let coordenada = [{
      'longitude' : res.coords.longitude,
      'latitude' : res.coords.latitude
    }];
    console.log(coordenada);
    this.loadMap(coordenada);
  });
}


loadMap(coordenada:any[]){
  console.log(coordenada);
  let longitud = coordenada[0]['longitude'];
  let latitude = coordenada[0]['latitude'];
  // let location: crea un objeto con las coordenadas latitude y longitud y es pasada a las // opciones de google maps.

  let location = new GoogleMapsLatLng(latitude,longitud);
  this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
      'compass': true,
      'myLocationButton': true,
      'indoorPicker': true,
      'zoom': true,
    },
    'gestures': {
      'scroll': true,
      'tilt': true,
      'rotate': true,
      'zoom': true
    },
    'camera': {
      'latLng': location,
      'tilt': 30,
      'zoom': 15,
      'bearing': 50
    }
  });

  this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
   response => {
        console.log('Map is ready!');
        console.log(response.json());
},
error =>
  console.log(error)
);

}

}
