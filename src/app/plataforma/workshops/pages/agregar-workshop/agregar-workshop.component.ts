import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlataformaService } from '../../../services/plataforma.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

export interface Documento {
  name: string;
}
export interface camara {
  name: string;
}

@Component({
  selector: 'app-agregar-workshop',
  templateUrl: './agregar-workshop.component.html',
  styleUrls: ['./agregar-workshop.component.css']
})
export class AgregarWorkshopComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  camaras: any[] = [];
  documentos: any[] = [];
  Topics: any = {};
  form!: FormGroup;
  valu2: any;
  topics: any = {};
  toppingListspeed: any = {};
  toppingListsangle: any = {};
  toppingListsweight: any = {};

  objeto = {};

  workshop = {
    topic_id: "",
    course_id: "",
    data: {},
    constants: [],
    cameras: {},
    start_available: "",
    end_available: ""
  }

  constructor(
    private labServicios: PlataformaService,
    private formbuilder: FormBuilder) {
    this.buildForm();
  }



  ngOnInit(): void {
    this.labServicios.getTopics()
      .subscribe(resp => {
        this.topics = resp;
        console.log(this.topics);
        this.toppingListsangle = this.topics.topics[0].constants.angle;
        this.toppingListsangle = Object.values(this.toppingListsangle);
        this.toppingListspeed = this.topics.topics[0].constants.speed;
        this.toppingListspeed = Object.values(this.toppingListspeed);
        this.toppingListsweight = this.topics.topics[2].constants.weight;
        this.toppingListsweight = Object.values(this.toppingListsweight);
      });
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      documentos: ['', [Validators.required]],
      IpCamamra: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      tema: ['', [Validators.required]],
      variables: [''],
      variables2: [''],
    });
  }

  save() {
    const value = this.form.value;
    console.log(this.camaras);
    //this.buildJson(this.form.value);
    this.labServicios.postWorkshops(this.buildJson(this.form.value)).subscribe(data => { this.valu2 = data });

    //console.log(typeof this.form.get('variables')?.value);
    //console.log(JSON.stringify({topic_id:this.form.get('tema')?.value,course_id:localStorage.getItem('courseId'), data:this.documentos,constants: JSON.stringify(this.form.get('variables')?.value+','+this.form.get('variables2')?.value) ,cameras:this.camaras , start_available:value.start,end_available:value.end}));
    //this.labServicios.postWorkshops(JSON.stringify({topic_id:this.form.get('tema')?.value,course_id:localStorage.getItem('courseId'), data:this.documentos,constants: JSON.stringify(this.form.get('variables')?.value+','+this.form.get('variables2')?.value) ,cameras:this.camaras , start_available:value.start,end_available:value.end })).subscribe(data => { this.valu2 = data });
  }



  private buildJson(value: any) {
    if (value) {
      if (String(this.form.get('tema')?.value) === "0lqQTwVkz6t5i8PiCJFR") {
        this.objeto = {
          "topic_id": String(this.form.get('tema')?.value),
          "course_id": String(localStorage.getItem('courseId')),
          "data": this.documentos,
          "constants": {
            "angle": this.form.get('variables')?.value,
            "speed": this.form.get('variables2')?.value
          },
          "cameras": this.camaras,
          "start_available": this.form.value.start,
          "end_available": this.form.value.end,
        }
        console.log(this.objeto);
      }
      if (String(this.form.get('tema')?.value) === "w1VXVZqsimm4vogCCQVC") {
        this.objeto = {
          "topic_id": String(this.form.get('tema')?.value),
          "course_id": String(localStorage.getItem('courseId')),
          "data": this.documentos,
          "constants": {
            "weight": this.form.get('variables')?.value,
          },
          "cameras": this.camaras,
          "start_available": this.form.value.start,
          "end_available": this.form.value.end,
        }
      }
      console.log(this.objeto);
    }
    if (String(this.form.get('tema')?.value) === "t8BG5qizsNXdZobuORtt") {
      this.objeto = {
        "topic_id": String(this.form.get('tema')?.value),
        "course_id": String(localStorage.getItem('courseId')),
        "data": this.documentos,
        "constants": {
          
        },
        "cameras": this.camaras,
        "start_available": this.form.value.start,
        "end_available": this.form.value.end,
      }
    }
    console.log(this.objeto);
    
    return this.objeto;
  }

  onSubmit() {
    if (this.form.valid) {
      this.save();
      alert("CURSO REGISTRADO");
      this.camaras = [];
      this.documentos = [];
      this.buildForm();
    } else {
      alert("Debe LLenar todos los campos");
    }
  }


  addCamara(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {

      this.camaras.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeCamara(camara: camara): void {
    const index = this.camaras.indexOf(camara);

    if (index >= 0) {
      this.camaras.splice(index, 1);
    }
  }

  addDocumento(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.documentos.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeDocumento(doc: Documento): void {
    const index = this.documentos.indexOf(doc);

    if (index >= 0) {
      this.documentos.splice(index, 1);
    }
  }
}
