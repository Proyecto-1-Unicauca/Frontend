import { Component, OnInit } from '@angular/core';
import { LaboratoriosService } from '../../services/laboratorios.service';

@Component({
  selector: 'app-main-principal',
  templateUrl: './main-principal.component.html',
  styleUrls: ['./main-principal.component.css']
})
export class MainPrincipalComponent implements OnInit {

  subjectsss: any = [];

  constructor(private labServicios: LaboratoriosService) { }

  ngOnInit(): void {
      this.labServicios.getSubjects()
      .subscribe( resp => {
        console.log(resp);
        this.subjectsss = resp;
         

      });
  }

  imprimirSubject() {
    console.log(this.subjectsss.subjects);
    
  }
 

 

}
