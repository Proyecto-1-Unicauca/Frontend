import { Component } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendario-eventos',
  templateUrl: './calendario-eventos.component.html',
  styles: [ ]
})
export class CalendarioEventosComponent{

  eventos = [
    {
      title: 'Practica Mecanica', 
      start: '2022-03-08T08:30:00',
      end: '2022-03-08T12:00:00',
      description: 'Pracrtica' 
    },
    {
      title: 'Practica Mecanica', 
      start: '2022-03-09T10:30:00',
      end: '2022-03-09T12:00:00',
      description: 'Pracrtica' 
    },
  ]

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.eventos
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  constructor() { }
}
