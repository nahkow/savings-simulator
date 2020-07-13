import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SavingsCalculatorService } from '../services/savings-calculator.service';
import { DateManagerService } from '../services/date-manager.service';

@Component({
  templateUrl: './savings-simulator.component.html',
})
export class SavingsSimulatorComponent implements OnInit {
  public data = {
    amount: 2000,
    date: moment(),
  }

  constructor(private service: SavingsCalculatorService, private dateManager: DateManagerService) { }

  ngOnInit(): void {
  }

  public calculateMonthlyAmount(){
    return this.service.calculateMontlyDeposits(this.data.amount, this.data.date.format('MM/YYYY'));
  }

  public getMonthsToDate(){
    return this.dateManager.calculateAmountOfMonths(this.data.date.format('MM/YYYY'));
  }

  public setDate(v: string){
    this.data.date = moment(v, 'MM/YYYY');
  }
}
