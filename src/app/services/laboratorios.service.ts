import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LaboratoriosService {

  constructor(private http: HttpClient) { }

  getSubjects() {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })

    return this.http.get('http://127.0.0.1:8000/subjects', {headers: httpHeader});
  }
}
