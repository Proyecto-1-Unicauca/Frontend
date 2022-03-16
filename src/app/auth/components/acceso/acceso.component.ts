import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  rta: any=[];
  
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private Login: LoginService
  ) { }

  ngOnInit(): void {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        
        this.Login.postLogin(data.email)
        .subscribe( resp => {
          this.rta = resp;
          console.log(this.rta);
          localStorage.setItem('Id',this.rta.userId);
          if(this.rta.message === 'Email found'){
            console.log("USER FOUND");
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            localStorage.setItem('photoUrl', data.photoUrl);
            this.router.navigate([`/courses/listado/`, this.rta.userId]);
          }else{
            alert("Usuario No registrado")
          }
        });
      }      
    );
  }
}
