import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlataformaService } from '../../../services/plataforma.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatBottomSheet, MatBottomSheetRef} from  '@angular/material/bottom-sheet' ;

export interface Ip {
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
  ips: Ip[] = [];
  form!: FormGroup;
  valu2: any;
  topics: any = {};

  constructor(   
    private labServicios: PlataformaService,
    private formbuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.labServicios.getTopics()
    .subscribe(resp => {
      console.log(resp);
      this.topics=resp;
     });
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      dirIp: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      tema:['',[Validators.required]],
    }) ;
  }

  save() {
    const value = this.form.value;
    this.labServicios.postWorkshops(JSON.stringify({topic_id:1,course_id:3, data:this.form.value, start_available:value.start,end_available:value.end })).subscribe(data => { this.valu2 = data });
  }

  
  onSubmit() {
    if (this.form.valid) {
      this.save();
      alert("CURSO REGISTRADO");
    } else {
      alert("Debe LLenar todos los campos");
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.ips.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Ip): void {
    const index = this.ips.indexOf(fruit);

    if (index >= 0) {
      this.ips.splice(index, 1);
    }
  }
}
