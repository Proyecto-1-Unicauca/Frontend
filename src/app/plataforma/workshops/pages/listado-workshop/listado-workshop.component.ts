import { Component, OnInit } from '@angular/core';
import { PlataformaService } from 'src/app/plataforma/services/plataforma.service';
import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-listado-workshop',
  templateUrl: './listado-workshop.component.html',
  styleUrls: ['./listado-workshop.component.css']
})
export class ListadoWorkshopComponent implements OnInit {

  respuesta: any = {};
  workshops: any = [];
  workshop: any;
  respuestaTopic: any = {};
  courseId: any = '';
  flagWorkshop: boolean = false;

  isChecked = true;
  topic = "";


  constructor(
    private labServicios: PlataformaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log("Entro");
    this.activatedRoute.params
      .subscribe(courseId => this.courseId = courseId);

    console.log(this.courseId.courseId);

    this.labServicios.getWorkshopsByIdCourse(this.courseId.courseId)
      .subscribe(resp => {
        this.respuesta = resp;
        this.workshops = this.respuesta.workshops;
        console.log(this.workshops);
        if (this.workshops.length != 0) {
          this.flagWorkshop = true;
          for (let workshop of this.workshops) {
            this.labServicios.getTopicsbyId(workshop.topicId).subscribe(resp => {
              this.respuesta = resp;
              if (workshop.topicId == this.respuesta.topic.id) {
                this.topic = this.respuesta.topic.name;
                workshop.nameTopic = this.topic;
              }
            })
          }
        } else {
          this.flagWorkshop = false;
        }
      });
  }
  public deleteWorkshop(idWorkshop: any) {
    console.log("Entró eliminar")
    this.labServicios.deleteWorkShops(idWorkshop)
      .subscribe(resp => {
        this.respuesta = resp;
        this.workshops = this.respuesta.workshops;
        console.log(this.workshops)
        window.location.reload();
      });
  }

  infoWorkShop(id: any){
    this.labServicios.getWorkshopsById(id)
      .subscribe(resp => {
        this.respuesta = resp;
        this.workshop = this.respuesta.workshop;
        console.log(this.workshop)
      });
  }

  public abrirVistaPracticas() {
    this.router.navigate([`./workshops/practices/vistaprincipal`])
  }
  eliminarWorkshop(id: any) {

    const dialogConfirmar = this.dialog.open(ConfirmarComponent, {
      width: '350px',
    })

    dialogConfirmar.afterClosed().subscribe(
      (result) => {
        console.log(result);
        if (result) {
          this.labServicios.deleteWorkShops(id)
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
}
