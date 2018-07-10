import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdibroDatetimePickerComponent } from './ngx-adibro-datetime-picker.component';

describe('NgxAdibroDatetimePickerComponent', () => {
  let component: NgxAdibroDatetimePickerComponent;
  let fixture: ComponentFixture<NgxAdibroDatetimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdibroDatetimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdibroDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
