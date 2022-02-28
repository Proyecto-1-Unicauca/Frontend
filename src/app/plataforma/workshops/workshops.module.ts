import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingWorkshopsModule } from './app-routing-workshops.module';
import { HomeWorkshopComponent } from './pages/home-workshop/home-workshop.component';
import { ListadoWorkshopComponent } from './pages/listado-workshop/listado-workshop.component';
import { AgregarWorkshopComponent } from './pages/agregar-workshop/agregar-workshop.component';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListadoEstudiantesComponent } from './pages/listado-estudiantes/listado-estudiantes.component';
import { AgregarEstudianteComponent } from './pages/agregar-estudiante/agregar-estudiante.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeWorkshopComponent,
    ListadoWorkshopComponent,
    AgregarWorkshopComponent,
    ListadoEstudiantesComponent,
    AgregarEstudianteComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingWorkshopsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkshopsModule { }
