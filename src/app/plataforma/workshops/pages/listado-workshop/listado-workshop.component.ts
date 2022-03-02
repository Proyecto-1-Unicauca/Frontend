import { Component, OnInit } from '@angular/core';
import { PlataformaService } from 'src/app/plataforma/services/plataforma.service';
import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listado-workshop',
  templateUrl: './listado-workshop.component.html',
  styleUrls: ['./listado-workshop.component.css']
})
export class ListadoWorkshopComponent implements OnInit {

  respuesta: any = {};
  workshops: any = [];
  respuestaTopic: any = {};
  courseId: any = '';

  isChecked = true;
  topic = "";


  constructor(
    private labServicios: PlataformaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("Entro");
    this.activatedRoute.params
      .subscribe(courseId => this.courseId = courseId);

    console.log(this.courseId.courseId);
    localStorage.setItem('courseId',this.courseId.courseId);
    this.labServicios.getWorkshopsById(this.courseId.courseId)
      .subscribe(resp => {
        this.respuesta = resp;
        this.workshops = this.respuesta.workshops;
        for (let workshop of this.workshops ){
          this.labServicios.getTopics(workshop.topicId).subscribe(resp=>{
            this.respuesta=resp;
            if(workshop.topicId == this.respuesta.topic.id){
              this.topic = this.respuesta.topic.name;
              workshop.nameTopic=this.topic;
            }
          }) 
        }
      });
  }
   public deleteWorkshop(idWorkshop:any){
    console.log("Entró eliminar")
    this.labServicios.deleteWorkShops(idWorkshop)
    .subscribe(resp => {
      this.respuesta = resp;
      this.workshops = this.respuesta.workshops;
      console.log(this.workshops)
      window.location.reload();
    });
  }
}
