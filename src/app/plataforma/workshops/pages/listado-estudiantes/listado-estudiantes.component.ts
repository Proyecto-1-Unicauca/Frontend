import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlataformaService } from 'src/app/plataforma/services/plataforma.service';

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent implements OnInit {

  courseId: any = '';
  respuesta: any = {};
  students: any = [];

  constructor( 
    private labServicios: PlataformaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Entre a estudiantes")
    this.activatedRoute.params
      .subscribe(courseId => this.courseId = courseId);
    console.log(this.courseId);
    this.labServicios.getStudentsByCourseId(this.courseId.courseId)
    .subscribe(resp => {
      this.respuesta = resp;
      this.students = this.respuesta.Students.students;
      console.log(this.students);
    })
  }

}
