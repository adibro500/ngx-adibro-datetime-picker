import { Input, Output, EventEmitter, ViewChild, ElementRef, Directive, Renderer } from "@angular/core";
import { OnInit } from "@angular/core";
// import 'node_modules/jquery/dist/jquery.min.js';
// import 'node_modules/jquery-ui-dist/jquery-ui.min.js';
declare var $: any;
declare var datetimepicker: any;
declare var datepicker: any;
@Directive({
  selector: '[ngxAdibroDatetimePicker]'
})

export class NgxAdibroDatetimePickerDirective {
  @Input() value = '';
  @Input() readonly: boolean;
  @Input() minimumDate: boolean = false;
  @Input() onlyDatePicker: boolean = false;
  @Output() dateChange = new EventEmitter();
  @Input() formatDate;
  loadAPI: Promise<any>;

  constructor(public el: ElementRef, public renderer: Renderer) {
    setTimeout(() => {
      if (this.onlyDatePicker === true) {
        $(this.el.nativeElement).datepicker({
          controlType: 'select'
          , oneLine: true,
          dateFormat: this.formatDate,
          minDate: this.minimumDate === false ? '' : new Date(),
          onSelect: (value) => {
            this.value = value;
            this.dateChange.next(value);
          }
        })
          .datepicker('setDate', this.value);
      }
      else {

        if (this.readonly === true) {
          console.log('hello')
          $(this.el.nativeElement).attr('readonly', 'readonly');
        }
        else {
          console.log('hello222')

          $(this.el.nativeElement).removeAttr('readonly');
        }


        $(this.el.nativeElement).datetimepicker({
          controlType: 'select',
          oneLine: true,
          dateFormat: this.formatDate,
          timeFormat: 'HH:mm tt',
          minDate: this.minimumDate === false ? '' : new Date(),
          onSelect: (value) => {
            this.value = value;
            this.dateChange.next(value);
          }
        })
          .datepicker('setDate', this.value);
      }
    }, 0);
  }
}

