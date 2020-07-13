import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPickerComponent } from './month-picker.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import * as moment from 'moment';

describe('MonthPickerComponent', () => {
  let component: MonthPickerComponent;
  let fixture: ComponentFixture<MonthPickerComponent>;
  const data = '10/2020';
  const dateformat = 'MM/YYYY';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPickerComponent);
    component = fixture.componentInstance;
    component.date = moment(data, dateformat);

    fixture.detectChanges();
  });

  it('should render a picker with two arrow buttons and a display for current value', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('.month-picker--arrow.left')).toBeTruthy();
    expect(element.querySelector('.month-picker--display')).toBeTruthy()
    expect(element.querySelector('.month-picker--arrow.right')).toBeTruthy();
  });

  it('should render display for current value with a month and a year', () => {
    const dMonth: DebugElement = fixture.debugElement.query(By.css('.month-picker--display>#month'));
    const dYear: DebugElement = fixture.debugElement.query(By.css('.month-picker--display>#year'));

    expect(dMonth.nativeElement.textContent).toContain(moment(data, dateformat).format('MMMM'));
    expect(dYear.nativeElement.textContent).toContain(moment(data, dateformat).format('YYYY'));
  });

  it('should disable left arrow button if on currentMonth', ()=> {
    const de: DebugElement = fixture.debugElement.query(By.css('.month-picker--arrow.left'));
    if (moment(data, dateformat).isSame(moment(), 'month')){
      expect(de.nativeElement.disabled).toBeTrue();
    }
    else{
      expect(de.nativeElement.disabled).toBeFalse();
    }
  });

  it('should add a month from selected date', () => {
    const addedDate = moment(data, dateformat).add('1', 'M').format(dateformat);
    component.addMonth();
    expect(component.date.format(dateformat)).toBe(addedDate);
  });

  it('should remove a month from selected date', () => {
    const subtractedDate = moment(data, dateformat).subtract('1', 'M').format(dateformat);
    component.subtractMonth();
    expect(component.date.format(dateformat)).toBe(subtractedDate);
  })

  it('should not remove a month from selected date if on current date', () => {
    const currentDate = moment();
    component.date = currentDate;
    component.subtractMonth();
    expect(moment().isSame(component.date, 'M')).toBeTruthy();
  })
});
