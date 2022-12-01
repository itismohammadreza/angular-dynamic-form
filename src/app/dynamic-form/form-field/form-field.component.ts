import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldItem} from "../field-item.model";

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() field!: FieldItem;
  @Input() form!: FormGroup;
  @Input() submitted!: boolean;

  fieldId: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.fieldId = 'id_' + Math.floor(Math.random() * 100);
  }

  hasError() {
    const control = this.form.get(this.field.field)!;
    return (control.touched || control.dirty || this.submitted) && control.invalid;
  }
}
