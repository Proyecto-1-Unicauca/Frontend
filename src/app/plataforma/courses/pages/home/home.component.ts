import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dato: any = ""; 
  public nameUser: any;
  public emailUser: any;
  public photoUser: any;
  constructor(
    private router: Router,
  ) { 
    this.nameUser = localStorage.getItem('name');
    this.emailUser = localStorage.getItem('email');
    this.photoUser = localStorage.getItem('photoUrl');
  }

  ngOnInit(): void {
    this.path();
  }
  
  cerrarSesion() {
    localStorage.removeItem('name');
    localStorage.removeItem('photUrl');
    localStorage.removeItem('email');
    this.router.navigate(['/auth/login']);
    localStorage.clear();
  }
  path() {
    this.dato= localStorage.getItem('Id');
    console.log("Este es el dato"+this.dato);
  }

}
