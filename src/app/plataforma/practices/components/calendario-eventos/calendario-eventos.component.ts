import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { PlataformaService } from '../../../services/plataforma.service';

@Component({
  selector: 'app-calendario-eventos',
  templateUrl: './calendario-eventos.component.html',
  styles: [ ]
})
export class CalendarioEventosComponent implements OnInit{

  respuestaDelServicio: any = {};

  eventos: any = [ ]

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  constructor(
    private labServicios: PlataformaService
  ) { }

  ngOnInit(): void {
    const idWorkshop = 'jQ8bwj9S3855QBYyGSsm';
    this.labServicios.obtenerPracticasByIdWorkshops(idWorkshop)
      .subscribe(resp => {
     
        this.respuestaDelServicio = resp;
        this.respuestaDelServicio = this.respuestaDelServicio.practices;
        console.log(this.respuestaDelServicio);

        for(var i=0; i < this.respuestaDelServicio.length; i++) {
          console.log(this.respuestaDelServicio[i]);
          let practica: any = {};
          practica.title = 'Practica de Mecanica';
          practica.start = this.respuestaDelServicio[i].start;
          practica.end = this.respuestaDelServicio[i].end;
          practica.description = 'Practicas de laboratorio';
          this.eventos.push(practica);
        }
        this.calendarOptions.events = this.eventos;
        
      }); 
  }
}
