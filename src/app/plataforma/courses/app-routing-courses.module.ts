import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    
    children: [
      {
        path: 'listado/:userId',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
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
export class AppRoutingCoursesModule { }
