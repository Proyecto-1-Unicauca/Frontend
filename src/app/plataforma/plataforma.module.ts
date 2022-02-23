import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PlataformaRoutingModule } from './plataforma-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './courses/pages/listado/listado.component';
import { AgregarComponent } from './courses/pages/agregar/agregar.component';
import { AgregarWorkshopComponent } from './workshops/pages/agregar-workshop/agregar-workshop.component';
import { ListadoWorkshopComponent } from './workshops/pages/listado-workshop/listado-workshop.component';
import { HomeWorkshopComponent } from './workshops/pages/home-workshop/home-workshop.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
    AgregarWorkshopComponent,
    ListadoWorkshopComponent,
    HomeWorkshopComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PlataformaRoutingModule
  ]
})
export class PlataformaModule { }
