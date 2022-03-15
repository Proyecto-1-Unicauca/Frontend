import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dato: any = "";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.path();
  }
  
  cerrarSesion() {
    this.router.navigate(['/auth/login']);
  }
  path() {
    this.dato= localStorage.getItem('Id');
    console.log("Este es el dato"+this.dato);
  }

}
