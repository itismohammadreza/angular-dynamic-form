import {NgModule} from "@angular/core";
import {FormFieldComponent} from "./form-field/form-field.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent,
  ],
})
export class DynamicFormModule {
}
