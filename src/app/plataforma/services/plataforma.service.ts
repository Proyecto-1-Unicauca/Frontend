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

  getWorkshopsById(coursesId: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/courses/${coursesId}/workshops`,{headers: httpHeader});
  }

  getTopicsbyId(topic: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/topics/'+topic,{headers: httpHeader});
  }
  deleteWorkShops(workshopId: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.delete(`http://127.0.0.1:8000/workshops/${workshopId}`,{headers: httpHeader});
  }
  getStudentsByCourseId(courseId: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/students/${courseId}`,{headers: httpHeader});
  }
}
