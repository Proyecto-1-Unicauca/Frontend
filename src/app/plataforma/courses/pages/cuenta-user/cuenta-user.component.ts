import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-user',
  templateUrl: './cuenta-user.component.html',
  styleUrls: ['./cuenta-user.component.css']
})
export class CuentaUserComponent implements OnInit {

  public nameUser: any;
  public emailUser: any;
  public photoUser: any;
  constructor(
    
  ) { 
    this.nameUser = localStorage.getItem('name');
    this.emailUser = localStorage.getItem('email');
    this.photoUser = localStorage.getItem('photoUrl');
  }
  ngOnInit(): void {
    
  }

}
