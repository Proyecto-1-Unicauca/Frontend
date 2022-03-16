import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-workshop',
  templateUrl: './home-workshop.component.html',
  styleUrls: ['./home-workshop.component.css']

})
export class HomeWorkshopComponent implements OnInit {
  dato: any = "";

  idProfesor: any;

  public nameUser: any;
  public emailUser: any;
  public photoUser: any;

  url: any;
  
  constructor(
    private router: Router,
    ) { 
      this.idProfesor = localStorage.getItem('Id');
      this.nameUser = localStorage.getItem('name');
      this.emailUser = localStorage.getItem('email');
      this.photoUser = localStorage.getItem('photoUrl');
      this.url = '/courses/listado/'+this.idProfesor;
    }

  ngOnInit(): void {
    this.path();
  }

  path() {
    this.dato= localStorage.getItem('courseId');
    console.log(this.dato);
  }
  cerrarSesion() {
    this.router.navigate(['/auth/login']);
    localStorage.clear();
  }

  

}
