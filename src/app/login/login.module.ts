import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ImagesComponent } from './images/images.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    TituloComponent,
    LoginComponent,
    MainPageComponent,
    ImagesComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
