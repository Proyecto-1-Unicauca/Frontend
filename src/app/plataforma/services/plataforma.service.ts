import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  constructor(private http: HttpClient) { }

  getCursos(id_teacher: any) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/courses/${id_teacher}`, {headers: httpHeader});
  }
  
  postcourses(courses: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.post('http://127.0.0.1:8000/courses',courses,{headers: httpHeader});
  }

  getWorkshops(){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/workshops',{headers: httpHeader});
  }

  getWorkshopsById(cousesId: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/'+cousesId+'workshops',{headers: httpHeader});
  }

  getTopics(topic: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/topics/'+topic,{headers: httpHeader});
  }
}
