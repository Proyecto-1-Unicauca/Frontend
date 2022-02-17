import { Component, OnInit } from '@angular/core';
import { PlataformaService } from '../../services/plataforma.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  respuesta: any = {};
  subjects: any = [];

  constructor(private labServicios: PlataformaService) { }

  ngOnInit(): void {
      this.labServicios.getSubjects()
      .subscribe( resp => {
        console.log(resp);
        this.respuesta = resp;
        this.subjects = this.respuesta.subjects;
        console.log(this.subjects);
      });
  }

  imprimirSubject() {
    
    
  }

}
