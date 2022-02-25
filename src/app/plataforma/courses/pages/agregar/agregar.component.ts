import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlataformaService } from '../../../services/plataforma.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {

  form!: FormGroup;
  subjectsss: any = {};
  valu2: any = [];

  

  constructor(
    private labServicios: PlataformaService,
    public formbuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
   this.labServicios.getSubjects()
      .subscribe(resp => {
        console.log(resp);
        this.subjectsss=resp;
      });
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required]],
      start: [new FormControl(), [Validators.required]],
      end: [new FormControl(), [Validators.required]],
      subject_id: ['', [Validators.required]],
    }) ;
  }

  //Metodo para guarda la informacion del formulario
  save() {
    const value = this.form.value;
    this.labServicios.postcourses(this.form.value).subscribe(data => { this.valu2 = data });
    console.log(this.valu2);
  }

  onSubmit() {
    if (this.form.valid) {
      this.save();
      console.log(this.form.value);
    } else {
      alert("FILL ALL FIELDS");
    }
  }

}




