import { SavingGoal } from './../models/savings-goal';
import { SavingsGoalService } from './../services/savings-goal.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SavingsCalculatorService } from '../services/savings-calculator.service';
import { DateManagerService } from '../services/date-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './savings-simulator.component.html',
})
export class SavingsSimulatorComponent implements OnInit {
  private routSubrscription: Subscription;

  public goal: SavingGoal;

  public data = {
    amount: 2000,
    date: moment(),
  };

  constructor(
    private service: SavingsCalculatorService,
    private dateManager: DateManagerService,
    private savingsService: SavingsGoalService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.routSubrscription = this.route.queryParams.subscribe(params => {
      this.goal = {
        title: params.title,
        icon: params.icon,
        id: params.id
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routSubrscription.unsubscribe();
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

  createImageLink(name: string) {
    return `assets/images/${name}.svg`;
  }

  public saveGoal() {
    this.savingsService.addSavingGoal(this.data.date.format('MM/YYYY'), this.data.amount, this.goal.id);
    this.router.navigateByUrl('/');
  }
}
