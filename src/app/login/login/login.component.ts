import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rta: any=[];

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private Login:LoginService
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
