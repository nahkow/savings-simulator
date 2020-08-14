import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SavingsSimulatorComponent } from './savings-simulator/savings-simulator.component';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SavingsSimulatorComponent,
    MonthPickerComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
