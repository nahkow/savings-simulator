import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateManagerService {
  public currentDate = moment();

  /**
   * Calculates how many months from now until date. (Inclusionary)
   * @param date The date '/MM/YYYY'´ user wants to save by.
   */
  public calculateAmountOfMonths(date: string): number {
    const dateMoment = moment(date, 'MM/YYYY')
    const now = this.currentDate.date(1);
    return Math.round( dateMoment.diff(now, 'M', true)) + 1;
  }
  constructor() { }
}
