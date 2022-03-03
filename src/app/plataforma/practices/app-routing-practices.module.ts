import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VistaPrincipalComponent } from './pages/vista-principal/vista-principal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'vistaprincipal',
        component: VistaPrincipalComponent
      },
      {
        path: '**',
        redirectTo: 'vistaprincipal'
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
export class AppRoutingPracticesModule { }
