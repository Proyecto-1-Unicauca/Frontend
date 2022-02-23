import { Component, OnInit } from '@angular/core';
import { PlataformaService } from '../../../services/plataforma.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  respuesta: any = {};
  cursos: any = [];
  userID : any = {};

  constructor(
    private labServicios: PlataformaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(userId => this.userID = userId);

    console.log(this.userID.userId);

    this.labServicios.getCursos(this.userID.userId)
      .subscribe(resp => {
        console.log(resp);
        
        this.respuesta = resp;
        this.cursos = this.respuesta.courses;
        console.log(this.cursos);
      })
    
      /* this.labServicios.getCursos(909090)
      .subscribe( resp => {
        console.log(resp);
        this.respuesta = resp;
        this.subjects = this.respuesta.subjects;
        console.log(this.subjects);
      }); */
  }


}
