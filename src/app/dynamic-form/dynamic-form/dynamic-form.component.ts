import {Component, Input, OnInit} from '@angular/core';
import {FieldItem} from "../field-item.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields!: FieldItem[];

  form = new FormGroup({});
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.fields.forEach(field => {
      const control = new FormControl();
      if (field.mandatory) {
        control.addValidators(Validators.required);
      }
      this.form.addControl(field.field, control);
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
  }
}
