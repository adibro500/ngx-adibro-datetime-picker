# ngx-adibro-datetime-picker for Angular 5+

This is an angular directive for date-time picker. This is built on top of jquery.

## Installation
```
npm install --save ngx-adibro-datetime-picker@latest
```

## Usage

### In angular-cli/angular.json add styles and scripts:

```
"styles": [
"../node_modules/ngx-adibro-datetime-picker/src/assets/jquery-ui.css",
"../node_modules/ngx-adibro-datetime-picker/src/assets/css/jquery-ui-timepicker-addon.css"
],
"scripts": [
"../node_modules/ngx-adibro-datetime-picker/src/assets/js/jquery.js",              
"../node_modules/ngx-adibro-datetime-picker/src/assets/jquery-ui.js",
"../node_modules/ngx-adibro-datetime-picker/src/assets/js/jquery-ui-timepicker-addon.js"
],
```

### Inside app.module file import the directive and module:

```
import {NgxAdibroDatetimePickerModule, NgxAdibroDatetimePickerDirective} from 'ngx-adibro-datetime-picker';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ... ,
    NgxAdibroDatetimePickerModule,
    ... ,
  ],
  providers: [NgxAdibroDatetimePickerDirective],
  bootstrap: [...]
})
export class AppModule { }

```
### In your HTML file you can do:

```
<input type="text" id="startid" [readonly]="true" [minimumDate]="false" [onlyDatePicker]="false" [formatDate]="'dd/mm/yy'" ngxAdibroDatetimePicker  (dateChange)="startChange($event)"/>
```
### You can then access the value of the picker in your component file like so:

```
startDate:any = new Date();
onStartDateChange(date){
    this.startDate = date;
    this.startDate = new Date(this.startDate).toISOString();
  }
```
Have fun !!!
