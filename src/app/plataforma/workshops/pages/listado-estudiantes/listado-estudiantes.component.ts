import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PlataformaService } from 'src/app/plataforma/services/plataforma.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent implements OnInit {

  courseId: any = '';
  respuesta: any = {};
  students: any = [];
  displayedColumns: any[] = ['name','surname','email','id','actions'];
  flagStudents: boolean = false;
 
  constructor( 
    private labServicios: PlataformaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialog: MatDialog) { }

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
      if(this.students.length  != 0){
        this.flagStudents = true;
      }else{
        this.flagStudents = false;
      }
    })
  }



  eliminarStudent(id: any) {

    const dialogConfirmar = this.dialog.open(ConfirmarComponent, {
      width: '350px',
      data: name
    })

    dialogConfirmar.afterClosed().subscribe(
      (result) => {
        console.log(result);
        if (result) {
          this.labServicios.deleteStudent(id)
            .subscribe(resp => {
              console.log(resp);
              this.router.navigateByUrl("/refresh", { skipLocationChange: true })
                .then(() => {
                  console.log(decodeURI(this.location.path()));
                  this.router.navigate([decodeURI(this.location.path())])
                });
            })
        }
      }
    )
  }
  public deleteStudent(studentId:any){
    console.log("Entró eliminar estudiante")
    console.log(studentId);
    this.labServicios.deleteStudent(studentId)
    .subscribe(resp => {
      this.respuesta = resp;
      this.students = this.respuesta.students;
    });
    window.location.reload();

  }
}

