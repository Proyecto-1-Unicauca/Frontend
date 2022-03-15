import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-workshop',
  templateUrl: './home-workshop.component.html',
  styleUrls: ['./home-workshop.component.css']

})
export class HomeWorkshopComponent implements OnInit {
  dato: any = "";

  constructor() { }

  ngOnInit(): void {
    this.path();
  }

  path() {
    this.dato= localStorage.getItem('courseId');
    console.log(this.dato);
  }

}
