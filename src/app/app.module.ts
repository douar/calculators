import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestmentEstateComponent } from './components/investment-estate/investment-estate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    InvestmentEstateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
