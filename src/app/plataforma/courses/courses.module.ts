import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingCoursesModule } from './app-routing-courses.module';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
   
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingCoursesModule
  ]
})
export class CoursesModule { }
