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

         console.log( this.rta);
        });

        if(Object.is(this.rta.message.getString(),'Email found')){
            this.router.navigate(['./sitio-principal/main']);
        }
      }      
    );
    
    
  }
}
