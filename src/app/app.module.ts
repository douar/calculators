import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestmentEstateComponent } from './components/investment-estate/investment-estate.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentEstateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
