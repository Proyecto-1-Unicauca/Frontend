import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlataformaService } from '../../../services/plataforma.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {

  public form!: FormGroup;
  subjectsss: any = [];
  valu2: any = [];

  constructor(
    private labServicios: PlataformaService,
    private formbuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {

    this.labServicios.getSubjects()
      .subscribe(resp => {
        this.subjectsss = resp;
      });

    console.log(this.form.value + "TESTO");
    
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      subject_id: ['', [Validators.required]],
    });
  }

  //Metodo para guarda la informacion del formulario
  save() {
    console.log(this.form + "TESTO");
    const value = this.form.value;
    this.labServicios.postcourses(value).subscribe(data => { this.valu2 = data });
    console.log(this.form);
  }

  MENSAJE(){
    console.log("Josman");
  }

}




