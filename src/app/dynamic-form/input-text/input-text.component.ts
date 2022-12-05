import {Component, forwardRef, Host, InjectFlags, Injector, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
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
    this.ngControl = this.injector.get(NgControl, null)!
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
      if (this.controlContainer) {
        const formDirective = this.controlContainer.formDirective as FormGroupDirective;
        const control = formDirective.form.get(this.ngControl.name as string)!;
        formDirective.ngSubmit.subscribe(() => {
          control.markAsTouched();
        });
      }
    }
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onModelChange(inputElement.value);
  }

  onBlur() {
    this.onModelTouched();
  }

  isInvalid() {
    if (this.ngControl) {
      const control = this.ngControl.control!;
      return (control.touched || control.dirty) && control.invalid;
    }
    return false;
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
