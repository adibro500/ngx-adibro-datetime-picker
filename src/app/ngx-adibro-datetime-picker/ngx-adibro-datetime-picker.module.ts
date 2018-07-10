import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAdibroDatetimePickerComponent } from './ngx-adibro-datetime-picker.component';
import { NgxAdibroDatetimePickerDirective } from './ngx-adibro-datetime-picker.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxAdibroDatetimePickerComponent,
    NgxAdibroDatetimePickerDirective
  ],
  exports: [
    NgxAdibroDatetimePickerComponent,
    NgxAdibroDatetimePickerDirective
  ]
})
export class NgxAdibroDatetimePickerModule { }
