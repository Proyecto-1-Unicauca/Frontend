import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-workshop',
  templateUrl: './home-workshop.component.html',
  styleUrls: ['./home-workshop.component.css']

})
export class HomeWorkshopComponent implements OnInit {
  dato: any = "";

  constructor(
    private router: Router,
    ) { }

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
