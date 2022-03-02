import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeWorkshopComponent } from './pages/home-workshop/home-workshop.component';
import { ListadoWorkshopComponent } from './pages/listado-workshop/listado-workshop.component';
import { AgregarWorkshopComponent } from './pages/agregar-workshop/agregar-workshop.component';
import { AgregarEstudianteComponent } from './pages/agregar-estudiante/agregar-estudiante.component';
import { ListadoEstudiantesComponent } from './pages/listado-estudiantes/listado-estudiantes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeWorkshopComponent,
    children: [
      {
        path: 'listadoworkshops/:courseId',
        component: ListadoWorkshopComponent
      },
      {
        path: 'agregar',
        component: AgregarWorkshopComponent
      },
      {
        path: 'crearestudiante',
        component: AgregarEstudianteComponent
      },
      {
        path: 'listadoestudiante/:courseId',
        component: ListadoEstudiantesComponent
      },{
        path: '**',
        redirectTo: 'listadoworkshops/:courseId'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingWorkshopsModule { }
