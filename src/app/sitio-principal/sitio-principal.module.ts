import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { MainPrincipalComponent } from './main-principal/main-principal.component';
import { SitioPrincipalRoutingModule } from './sitio-principal-routing.module';



@NgModule({
  declarations: [
    CursosComponent,
    MainPrincipalComponent
  ],
  imports: [
    CommonModule,
    SitioPrincipalRoutingModule
  ]
})
export class SitioPrincipalModule { }
