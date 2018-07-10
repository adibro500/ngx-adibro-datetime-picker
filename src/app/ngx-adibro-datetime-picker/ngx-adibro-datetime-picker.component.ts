import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-adibro-datetime-picker',
  templateUrl: './ngx-adibro-datetime-picker.component.html',
  styleUrls: ['./ngx-adibro-datetime-picker.component.css']
})
export class NgxAdibroDatetimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startChange(event) {
    console.log(event);
  }
}
