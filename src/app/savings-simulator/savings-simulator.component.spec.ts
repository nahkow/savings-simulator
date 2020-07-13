import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsSimulatorComponent } from './savings-simulator.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SavingsSimulatorComponent', () => {
  let component: SavingsSimulatorComponent;
  let fixture: ComponentFixture<SavingsSimulatorComponent>;

  const testData= {
    month: '10/2020',
    amount: 40000
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a card element', () => {
    expect(fixture.nativeElement.querySelector('.origin-card')).not.toBeNull();
  });

  it('expect a form with a currency input and a month-picker', () => {
    const de: DebugElement = fixture.debugElement.query(By.css('.origin-form-group'));
    expect(de.nativeElement).not.toBeNull();

    const dPicker: DebugElement = fixture.debugElement.query(By.css('origin-month-picker'));
    expect(dPicker.nativeElement).toBeTruthy();

    const dInput: DebugElement = fixture.debugElement.query(By.css('.input-group>[currencyMask]'));
    expect(dInput.nativeElement).toBeTruthy();
  });


  it('should show how much user should save per month to acheive goal', () => {
    component.data.amount = testData.amount;
    component.setDate(testData.month);
    fixture.detectChanges();

    const de: DebugElement = fixture.debugElement.query(By.css('.mountly-amount'));
    expect(de.nativeElement.textContent).toEqual('$10,000');
  });

});
