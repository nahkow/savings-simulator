import { TestBed } from '@angular/core/testing';
import * as moment from 'moment';
import { SavingsCalculatorService } from './savings-calculator.service';

describe('SavingsCalculatorService', () => {
  const amount = 70000;
  const date = '12/2020';
  let service: SavingsCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingsCalculatorService);
    service['dateManager'].currentDate = moment('06/2020', 'MM/YYYY');
  });

  it('should calculate how much a user must save per month to reach amount', () => {

    expect(service.calculateMontlyDeposits(amount, date)).toBe(10000);
  });

});
