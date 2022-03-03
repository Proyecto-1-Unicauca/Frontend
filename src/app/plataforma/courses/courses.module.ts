import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingCoursesModule } from './app-routing-courses.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingCoursesModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }
