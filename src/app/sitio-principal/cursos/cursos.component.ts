import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaboratoriosService } from 'src/app/services/laboratorios.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./cursos.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class CursosComponent implements OnInit {

  form!: FormGroup;
  subjectsss: any = [];
  valu2:any=[];
  
  constructor(
      public modal:NgbModal,
      private formbuilder:FormBuilder,
      private labServicios: LaboratoriosService
    ) { 
    this.buildForm(); 
  } 

  ngOnInit(): void {
    this.labServicios.getSubjects()
    .subscribe( resp => {
      this.subjectsss = resp;

    });
}
    
  private buildForm() {
    this.form = this.formbuilder.group({
      name: [ '', [Validators.required]],
      start: [ '', [Validators.required]],
      end: [ '', [Validators.required]],
      subject_id: [ '', [Validators.required]],
    });
  }
  openSM( contenido: any ){
    this.modal.open(contenido,{windowClass:'oscuro'});
  }
  //Metodo para guarda la informacion del formulario
  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.labServicios.postcourses(value).subscribe(data=>{this.valu2=data});
      console.log(this.valu2);
      this.modal.dismissAll();
      this.form.reset();
    }else {
      this.form.markAllAsTouched();
    }
  }  
}
