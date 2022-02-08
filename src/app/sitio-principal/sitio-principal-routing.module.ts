import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPrincipalComponent } from './main-principal/main-principal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main', 
        component: MainPrincipalComponent
      },
      {
        path: '**',
        redirectTo: 'main'
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
export class SitioPrincipalRoutingModule { }
