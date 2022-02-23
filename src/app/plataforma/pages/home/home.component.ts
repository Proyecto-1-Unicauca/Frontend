import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ruta ="/platform/workshops";
  constructor(private router: Router ) {
    this.ruta = this.router.url;
    console.log(this.ruta);
  }

  ngOnInit(): void {
  }

}
