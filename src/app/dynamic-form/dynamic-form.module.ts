import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {InputTextComponent} from './input-text/input-text.component';
import {CheckBoxComponent} from './check-box/check-box.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    InputTextComponent,
    CheckBoxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DynamicFormComponent,
  ],
})
export class DynamicFormModule {
}
