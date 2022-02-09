import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  form!: FormGroup;

  constructor(public modal:NgbModal,private formbuilder:FormBuilder) { 
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
    this.modal.open(contenido,{windowClass:'oscuro'});
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
