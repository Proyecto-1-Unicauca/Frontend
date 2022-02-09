import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-crear-materia',
  templateUrl: './modal-crear-materia.component.html',
  styleUrls: ['./modal-crear-materia.component.css']
})
export class ModalCrearMateriaComponent implements OnInit {

  form!: FormGroup;
  textField: any;

  constructor(private formbuilder:FormBuilder,public modal:NgbModal) {
    this.buildForm(); 
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formbuilder.group({
      name: [ '', [Validators.required]],
      date: [ '', [Validators.required]],
      dateend: [ '', [Validators.required]],
      category: [ '', [Validators.required]],
    });

  }

  openSM( contenido: any ){
    this.modal.open(contenido,{size:'ss'});
  }

  //Metodo para guarda la informacion del formulario
  save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }else {
      this.form.markAllAsTouched();
    }
  } 
}
