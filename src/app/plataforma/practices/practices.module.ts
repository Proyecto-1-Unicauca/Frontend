import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { CalendarioEventosComponent } from './components/calendario-eventos/calendario-eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { VistaPrincipalComponent } from './pages/vista-principal/vista-principal.component';
import { AppRoutingPracticesModule } from './app-routing-practices.module';
import { MaterialModule } from '../../material/material.module';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    CalendarioEventosComponent,
    HomeComponent,
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingPracticesModule,
    MaterialModule,
    FullCalendarModule
  ]
})
export class PracticesModule { }
