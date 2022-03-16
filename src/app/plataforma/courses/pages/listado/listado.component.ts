import { Component, OnInit } from '@angular/core';
import { PlataformaService } from '../../../services/plataforma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  respuesta: any = {};
  cursos: any = [];
  userID : any = {};
  public nameUser: any;
  public emailUser: any;
  public photoUser: any;

  constructor(
    private labServicios: PlataformaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialog: MatDialog) {
      this.nameUser = localStorage.getItem('name');
      this.emailUser = localStorage.getItem('email');
      this.photoUser = localStorage.getItem('phtoUrl');
  }

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

  eliminarCurso(id: any, name: any) {

    const dialogConfirmar = this.dialog.open(ConfirmarComponent, {
      width: '350px',
      data: name
    })

    dialogConfirmar.afterClosed().subscribe(
      (result) => {
        console.log(result);
        if(result)
        {
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
    )
  }

  abrirCurso(id: any)
  {
    this.router.navigate([`/workshops/listadoworkshops/${id}`]);
  }


  savePath(rute: any){
    localStorage.setItem('courseId', rute);
  }

  public obtenerFecha(start_date:any):any {
    return start_date.substr(0, 10);
  }
}
