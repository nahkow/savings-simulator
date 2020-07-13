import { TestBed } from '@angular/core/testing';
import { DateManagerService } from './date-manager.service';
import * as moment from 'moment';

describe('DateManagerService', () => {
  let service: DateManagerService;
  const date = '12/2020';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateManagerService);
    service.currentDate = moment('06/2020', 'MM/YYYY');
  });

  it('should calculate how many months left until date', () => {
    expect(service.calculateAmountOfMonths(date)).toBe(7);
  });

  it('should calculate how many months left until date', () => {
    expect(service.calculateAmountOfMonths('10/2020')).toBe(5);
  });
  it('should calculate how many months left until date', () => {
    expect(service.calculateAmountOfMonths('07/2020')).toBe(2);
  });
});
