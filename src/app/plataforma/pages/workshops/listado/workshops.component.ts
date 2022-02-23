import { Component,OnInit} from '@angular/core';
import { PlataformaService } from '../../../services/plataforma.service';

import { FormsModule } from '@angular/forms'; import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})


export class WorkshopsComponent implements OnInit {
    respuesta: any = {};
    workshops: any = [];
    respuestaTopic: any ={};

    isChecked = true;
    topic = "";
  

    constructor(private labServicios: PlataformaService ) { }
  
    ngOnInit(): void {
        this.labServicios.getWorkshops()
        .subscribe( resp => {
          console.log(resp);
          this.respuesta = resp;
          this.workshops = this.respuesta.workshops;
          console.log(this.workshops);
          this.labServicios.getTopics(this.workshops[0].topicId).subscribe(resp=>{
            this.respuesta=resp;
            this.topic = this.respuesta.topic.name;
            console.log(this.topic);
          })
        });
    }   
}