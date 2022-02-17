import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CarruselImagenesComponent } from './components/carrusel-imagenes/carrusel-imagenes.component';
import { AccesoComponent } from './components/acceso/acceso.component';

@NgModule({
  declarations: [
    LoginComponent,
    CarruselImagenesComponent,
    AccesoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
