import { IndexComponent } from './index/index.component';
import { SavingsSimulatorComponent } from './savings-simulator/savings-simulator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'savings', component: SavingsSimulatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
