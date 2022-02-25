import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlataformaService } from '../../../services/plataforma.service';


@Component({
  selector: 'app-agregar-workshop',
  templateUrl: './agregar-workshop.component.html',
  styleUrls: ['./agregar-workshop.component.css']
})
export class AgregarWorkshopComponent implements OnInit {

  materia:any={
    titulo: '',
    descripcion:'',
    sensores:'',
    dirIp:'',
    fechaLimite:'',
  }
  form: any;
  valu2: any;

  constructor(   
    private labServicios: PlataformaService,
    private formbuilder: FormBuilder

  ) { }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      name: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      subject_id: ['', [Validators.required]],
    }) ;
  }

  save() {
    console.log(this.materia);
    const value = this.form.value;
    console.log(JSON.stringify(this.materia))
    this.labServicios.postcourses(JSON.stringify(this.materia)).subscribe(data => { this.valu2 = data });
  }

}
