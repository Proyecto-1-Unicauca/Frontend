import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioEventosComponent } from './components/calendario-eventos/calendario-eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { VistaPrincipalComponent } from './pages/vista-principal/vista-principal.component';
import { AppRoutingPracticesModule } from './app-routing-practices.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    CalendarioEventosComponent,
    HomeComponent,
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingPracticesModule,
    MaterialModule
  ]
})
export class PracticesModule { }
