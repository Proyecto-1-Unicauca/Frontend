import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PlataformaRoutingModule } from './plataforma-routing.module';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { WorkshopsComponent } from './pages/workshops/listado/workshops.component';
@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    WorkshopsComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PlataformaRoutingModule
  ]
})
export class PlataformaModule { }
