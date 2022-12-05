import {Component, InjectFlags, Injector, Input, OnInit} from '@angular/core';
import {ControlContainer, ControlValueAccessor, FormGroupDirective, NgControl} from "@angular/forms";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit, ControlValueAccessor {
  @Input() label?: string;

  value: string = '';
  fieldId: string = '';
  controlContainer?: FormGroupDirective;
  ngControl?: NgControl;
  onModelChange: any = (_: any) => {
  };
  onModelTouched: any = () => {
  };

  constructor(private injector: Injector) {
  }

  ngOnInit(): void {
    this.fieldId = 'id_' + Math.floor(Math.random() * 100);
    this.controlContainer = this.injector.get(
      ControlContainer,
      null,
      InjectFlags.Optional || InjectFlags.Host || InjectFlags.SkipSelf
    ) as FormGroupDirective;
    this.ngControl = this.injector.get(NgControl, null)!;
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onModelChange(inputElement.checked);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onModelTouched = fn;
  }
}
