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
    respuestaTopic: any ={};
    courseId: any = '';

    isChecked = true;
    topic = "";
  

    constructor(
      private labServicios: PlataformaService,
      private activatedRoute: ActivatedRoute
       ) { }
  
    ngOnInit(): void {
      /*console.log("Entro");
      this.activatedRoute.params
        .subscribe(courseId => this.courseId = courseId);

      console.log(this.courseId.id);*/
      

      
        this.labServicios.getWorkshops()
        .subscribe( resp => {
          console.log(resp);
          this.respuesta = resp;
          this.workshops = this.respuesta.workshops;
          console.log(this.workshops);

          /* this.labServicios.getTopics(this.workshops[0].topicId).subscribe(resp=>{
            this.respuesta=resp;
            this.topic = this.respuesta.topic.name;
            console.log(this.topic);
          }) */
        });
    } 
}
