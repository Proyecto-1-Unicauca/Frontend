import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  {
    path: 'sitio-principal',
    loadChildren: () => import('./sitio-principal/sitio-principal.module').then(m => m.SitioPrincipalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: "**",
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
