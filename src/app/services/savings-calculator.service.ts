import { Injectable } from '@angular/core';
import { DateManagerService } from './date-manager.service';


@Injectable({
  providedIn: 'root'
})
export class SavingsCalculatorService {

  constructor(private dateManager: DateManagerService) { }

  /**
   * Calculates how much needs to be saved from now until date to save amount
   * @param amount The amount user wants to save.
   * @param date The date 'MM/YYYY'´ user wants to save by.
   */
  calculateMontlyDeposits(amount: number, date: string): number{
    return amount / this.dateManager.calculateAmountOfMonths(date);
  }

}
