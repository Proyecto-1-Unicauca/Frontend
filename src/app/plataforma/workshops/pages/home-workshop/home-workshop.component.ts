import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-workshop',
  templateUrl: './home-workshop.component.html'
})
export class HomeWorkshopComponent implements OnInit {
  dato: any = "";

  constructor() { }

  ngOnInit(): void {
    this.dato = localStorage.getItem('courseId');
    console.log(`este es el dato ${this.dato}`);
  }

}
