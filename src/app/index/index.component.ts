import { SavingsGoalService } from './../services/savings-goal.service';
import { SavingGoal } from './../models/savings-goal';
import { Component, OnInit } from '@angular/core';
import { SAVING_GOALS } from '../mocks/saving-goals.mock';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public savingGoals = [];

  constructor(private router: Router, private service: SavingsGoalService) { }

  ngOnInit(): void {
    this.savingGoals = this.service.getSavingGoals();
  }

  createImageLink(name: string) {
    return `assets/images/${name}.svg`;
  }

  goToSimulator(item: SavingGoal){
    this.router.navigate(['/savings'], { queryParams: { title: item.title, icon: item.icon, id: item.id} });
  }

  formatDate(date: string){
    return moment(date, 'MM/YYYY').format('MMM YYYY')
  }

}
