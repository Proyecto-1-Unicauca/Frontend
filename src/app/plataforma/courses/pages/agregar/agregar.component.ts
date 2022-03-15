import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { PlataformaService } from '../../../services/plataforma.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})

export class AgregarComponent implements OnInit {

  form!: FormGroup;
  subjects: any = {};
  valu: any = [];
  topics: any=[];

  

  constructor(
    private labServicios: PlataformaService,
    public formbuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
   this.labServicios.getSubjects()
      .subscribe(resp => {
        this.subjects=resp;
      });
      
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      teacher_id:[localStorage.getItem('Id')],
      name: ['', [Validators.required]],
      start: [new FormControl(), [Validators.required]],
      end: [new FormControl(), [Validators.required]],
      subject_id: ['', [Validators.required]],
    }) ;
  }

  //Metodo para guarda la informacion del formulario
  save() {
    const value = this.form.value;
    console.log(value.start);
    if( this.compare(value.start,value.end)==0){
      alert("Fecha inicial y fecha final debe ser diferentes");
      return false;
    }else{
      this.labServicios.postcourses(this.form.value).subscribe(data => { this.valu = data });
      return true;
    }
  }


  onSubmit() {
    if (this.form.valid) {
      if(this.save()){
      alert("CURSO REGISTRADO");
      this.buildForm();
      }
    } else {
      alert("Se deben llenar todos los campos");
    }
  }
   compare(dateTimeA: any, dateTimeB: any) {
    var momentA = moment(dateTimeA,"DD/MM/YYYY");
    var momentB = moment(dateTimeB,"DD/MM/YYYY");
    if (momentA > momentB) return 1;
    else if (momentA < momentB) return -1;
    else return 0;
}

}




