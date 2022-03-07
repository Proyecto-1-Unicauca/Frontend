import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PlataformaService } from 'src/app/plataforma/services/plataforma.service';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  form!: FormGroup;
  subjectsss: any = {};
  valu2: any = [];

  
  constructor(
    private labServicios: PlataformaService,
    public formbuilder: FormBuilder
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm() {
    const id_value = localStorage.getItem('courseId');
    this.form = this.formbuilder.group({
      id: ['', [Validators.required]],
      course_id: [id_value],
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
        }) ;
  }

  save() {
    //const id_value = localStorage.getItem('courseId');
    //const value = this.form.value;
    const value = this.form.value;
    console.log(value);
    console.log(this.labServicios.postStudent(value).subscribe(data => { this.valu2 = data }));
    this.form.reset();
    //window.location.reload();
  }
  
  onSubmit() {
    if (this.form.valid) {
      this.save();
      alert("ESTUDIANTE REGISTRADO");
    } else {
      alert("ERROR EN EL REGISTRO DE ESTUDIANTES");
    }
  }
}
