import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: 'sesion', 
        component: MainPageComponent
      },
      {
        path: '**',
        redirectTo: 'sesion'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
