import { Component, OnInit } from '@angular/core';
import { PlataformaService } from '../../../services/plataforma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(userId => this.userID = userId);

    console.log(this.userID.userId);

    this.labServicios.getCursos(this.userID.userId)
      .subscribe(resp => {
        console.log(resp);
        
        this.respuesta = resp;
        this.cursos = this.respuesta.courses.courses;
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

  eliminarCurso(id: any) {
    this.labServicios.eliminarCursoById(id)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/refresh", {skipLocationChange: true})
          .then(() => {
            console.log(decodeURI(this.location.path()));
            this.router.navigate([decodeURI(this.location.path())])    
          });
      })
  }


}
