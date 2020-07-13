import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'origin-month-picker',
  templateUrl: './month-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerComponent implements OnInit {
  @Input() public date = moment();

  constructor() { }

  ngOnInit(): void {
  }

  disableLeftArrow(){
    return moment().isSame(this.date, 'M');
  }

  addMonth(){
    this.date.add(1, 'M');
  }

  subtractMonth(){
    if(this.date.isSame(moment(), 'M')) return;
    this.date.subtract(1, 'M');
  }

}
