import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlataformaService } from '../../../services/plataforma.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import * as moment from 'moment';

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
  camaras: camara[] = [];
  documentos: Documento[] = [];
  Topics: any = {};
  form!: FormGroup;
  valu2: any;
  topics: any = {};
  toppingListspeed: any = {};
  toppingListsangle: any = {};
  toppingListsweight: any = {};

  constructor(
    private labServicios: PlataformaService,
    private formbuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.labServicios.getTopics()
      .subscribe(resp => {
        this.topics = resp;
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

    if (this.compare(value.start, value.end) == 0) {
      alert("Fecha inicial y fecha final debe ser diferentes");
      return false;
    } else {
      this.labServicios.postWorkshops(JSON.stringify({ topic_id: this.form.get('tema')?.value, course_id: localStorage.getItem('courseId'), data: this.documentos, constants: JSON.stringify(this.form.get('variables')?.value + ',' + this.form.get('variables2')?.value), cameras: this.camaras, start_available: value.start, end_available: value.end })).subscribe(data => { this.valu2 = data });
      return true;
    }
  }

  compare(dateTimeA: any, dateTimeB: any) {
    var momentA = moment(dateTimeA, "DD/MM/YYYY");
    var momentB = moment(dateTimeB, "DD/MM/YYYY");
    if (momentA > momentB) return 1;
    else if (momentA < momentB) return -1;
    else return 0;
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.save()) {
        alert("CURSO REGISTRADO");
        this.camaras = [];
        this.documentos = [];
        this.buildForm();
      }
    } else {
      alert("Debe LLenar todos los campos");
    }
  }


  addCamara(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.camaras.push({ name: value });
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
      this.documentos.push({ name: value });
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
