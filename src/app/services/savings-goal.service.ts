import { SAVING_GOALS } from './../mocks/saving-goals.mock';
import { Injectable } from '@angular/core';
import { DateManagerService } from './date-manager.service';
import { SavingGoal } from '../models/savings-goal';


@Injectable({
  providedIn: 'root'
})
export class SavingsGoalService {

  constructor(private dateManager: DateManagerService) { }

  getSavingGoals(): Array<SavingGoal>{
    const goals = localStorage.getItem('saving_goals');
    if (goals) return JSON.parse(goals);
    localStorage.setItem('saving_goals', JSON.stringify(SAVING_GOALS));
    return SAVING_GOALS;
  }

  /**
  * Calculates how much needs to be saved from now until date to save amount
  * @param id The id of the saving goal
  * @param value The amount user wants to save.
  * @param goalDate The date 'MM/YYYY'´ user wants to save by.
  */
  addSavingGoal(goalDate: string, value: number, id: number){
    let goals = JSON.parse(localStorage.getItem('saving_goals'));
    goals = goals.map(item => {
      if (item.id == id) {
        item.value = value;
        item.goalDate = goalDate;
      }
      return item;
    });
    console.log(goals)
    localStorage.setItem('saving_goals', JSON.stringify(goals));
  }

}
