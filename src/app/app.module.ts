import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import {MisProductosPage} from '../pages/mis-productos/mis-productos';

import {AddArticuloPage} from '../pages/add-articulo/add-articulo';
import { LoginPage } from '../pages/login/login';
import {ResgistrarPage} from '../pages/resgistrar/resgistrar'
import {BuscarPage} from '../pages/buscar/buscar';
import {DescripcionPage} from '../pages/descripcion/descripcion';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    LoginPage,
    MisProductosPage,
    AddArticuloPage,
    ResgistrarPage,
    BuscarPage,
    DescripcionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    LoginPage,
    MisProductosPage,
    AddArticuloPage,
    ResgistrarPage,
    BuscarPage,
    DescripcionPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
