import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {FormValidations} from "../form-validations";

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  // @Input() mostrarErro: boolean = false;
  // @Input() msgErro: string = "";

  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  // @Input() control: FormControl = new FormControl();
  @Input() label: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage() {

    let control: FormControl = this.formGroup.get(this.controlName) as FormControl;

    for (const propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) &&
          control.touched) {

        return FormValidations.getErrorMsg(this.label, propertyName, control.errors[propertyName]);
      }
    }
    return null;
  }

}
