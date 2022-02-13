import { Component } from '@angular/core';
import { LaboratoriosService } from './services/laboratorios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(private labService: LaboratoriosService) {};

/*   obtenerSubject() {
    this.labService.getSubjects()
      .subscribe( resp => console.log(resp)
      );
  } */
}
