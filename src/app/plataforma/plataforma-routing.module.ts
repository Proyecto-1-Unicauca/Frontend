import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './courses/pages/listado/listado.component';
import { AgregarComponent } from './courses/pages/agregar/agregar.component';
import { HomeComponent } from './pages/home/home.component';
import { AgregarWorkshopComponent } from './workshops/pages/agregar-workshop/agregar-workshop.component';
import { ListadoWorkshopComponent } from './workshops/pages/listado-workshop/listado-workshop.component';

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
      },
      {
        path: 'workshops/:id/listado',
        component: ListadoWorkshopComponent
      },
      {
        path: 'workshops/:id/agregar',
        component: AgregarWorkshopComponent
      },
      {
        path: '**',
        redirectTo: 'agregar'
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
export class PlataformaRoutingModule { }
