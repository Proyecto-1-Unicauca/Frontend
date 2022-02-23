import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./plataforma/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'workshops',
    loadChildren: () => import('./plataforma/workshops/workshops.module').then(m => m.WorkshopsModule)
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }