import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlataformaService } from '../../../services/plataforma.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

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

  constructor(   
    private labServicios: PlataformaService,
    private formbuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      sensores: ['', [Validators.required]],
      dirIp: ['', [Validators.required]],
      fechalimite: ['', [Validators.required]],

    }) ;
  }

  save() {
    console.log(this.form.value);
    console.log(this.ips)
    const value = this.form.value;
    console.log(JSON.stringify(this.form))
    this.labServicios.postcourses(this.form.value).subscribe(data => { this.valu2 = data });
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
