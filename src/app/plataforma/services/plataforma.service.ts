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

  getCurso(id_curso: any) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/course/${id_curso}`, {headers: httpHeader});
  }
  getAllStudents() {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/students`, {headers: httpHeader});
  }
  /**
   * Método que elimina un curso segun su id
   * @param id_curso 
   * @returns String, mensaje de si el curso se elimino con exito
   */
  eliminarCursoById(id_curso: any) {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.delete(`http://127.0.0.1:8000/courses/${id_curso}`, {headers: httpHeader});
  }
  
  postcourses(courses: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.post('http://127.0.0.1:8000/courses',courses,{headers: httpHeader});
  }

  postStudent(student: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.post('http://127.0.0.1:8000/students',student,{headers: httpHeader});
  }

  updateCourse(clave: any, valor:any, id_course: any){
  
    var myObj: any = {};
    myObj[clave] = valor; 
    console.log(myObj);
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.put<any>(`http://127.0.0.1:8000/courses/${id_course}`,{
      "students": myObj
    },{headers: httpHeader}).subscribe(
      data => {
      console.log("PUT Request is successful ", data);
      },
      error => {
      console.log("Rrror", error);
      }
      );
  }

  updateStudent(course: any, id_student: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    console.log(course)
    return this.http.put<any>(`http://127.0.0.1:8000/students/${id_student}`,{
      "course_id": course
    },{headers: httpHeader}).subscribe(
      data => {
      console.log("PUT Request is successful ", data);
      },
      error => {
      console.log("Rrror", error);
      }
      );
  }

  getWorkshops(){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/workshops',{headers: httpHeader});
  }
  postWorkshops(workshops: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.post('http://127.0.0.1:8000/workshops',workshops,{headers: httpHeader});
  }

  getWorkshopsByIdCourse(coursesId: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/courses/${coursesId}/workshops`,{headers: httpHeader});
  }

  getWorkshopsById(workshopId: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/workshops/${workshopId}`,{headers: httpHeader});
  }



  getTopics(){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/topics',{headers: httpHeader});
  }

  getTopicsbyId(topic: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/topics/'+topic,{headers: httpHeader});
  }
  
  getSubjects() {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get('http://127.0.0.1:8000/subjects', {headers: httpHeader});
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

  getStudentsById(id: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/studentsId/${id}`,{headers: httpHeader});
  }


  deleteStudent(student: any){
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.delete(`http://127.0.0.1:8000/students/${student}`,{headers: httpHeader});
  }

  /**
   * Método encargado de obtener la informacion de las practicas asociadas a un id
   * de un workshop en especifico
   * @param idWorkshop 
   */
  obtenerPracticasByIdWorkshops(idWorkshop: any)
  {
    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/jason'
    })
    return this.http.get(`http://127.0.0.1:8000/workshops/${idWorkshop}/practices`, {headers: httpHeader});
  }
}
