import { Component, OnInit } from '@angular/core';
import { PlataformaService } from '../../../services/plataforma.service';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {

  respuestaDelServicio: any = {};
  
  constructor(
    private labServices: PlataformaService
  ) { }

  ngOnInit(): void {
    const idWorkshop = 'jQ8bwj9S3855QBYyGSsm';
    this.labServices.obtenerPracticasByIdWorkshops(idWorkshop)
      .subscribe(resp => {
        this.respuestaDelServicio = resp;
        this.respuestaDelServicio = this.respuestaDelServicio.practices;
        console.log(this.respuestaDelServicio); 
      })
  }

}
