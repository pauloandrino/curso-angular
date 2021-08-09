import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});


  constructor() { }

  ngOnInit(): void {
  }

  abstract submit(): any;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log('formlário inválido');

      this.verificaAsValidacoes(this.formulario);
    }
  }

  private verificaAsValidacoes(formGroup: FormGroup /*| FormArray*/) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.controls[campo];
      controle?.markAsTouched();

      if (controle instanceof FormGroup /* || controle instanceof FormArray*/) {
        this.verificaAsValidacoes(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched!;
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched! || this.formulario.get(campo)?.dirty!)
    );
  }

  verificaEmailInvalido() {

    let campoEmail = this.formulario.get('email');

    if (campoEmail?.errors) {
      return campoEmail!.errors!['email'] && campoEmail.touched;
    }
  }

  aplicaCssDeErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }




}
