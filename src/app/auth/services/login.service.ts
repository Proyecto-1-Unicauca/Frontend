import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  postLogin(email:string) {
      const httpHeader = new HttpHeaders({
        'Content-Type': 'application/jason'
      })  
      const body={ "email" : email };

      return this.http.post<any>('http://127.0.0.1:8000/validate-email',body,{headers: httpHeader});
  }
}