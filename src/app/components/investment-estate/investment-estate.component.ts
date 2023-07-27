import { Component } from '@angular/core';
import {IBaseNumbers} from "../../interface/IBaseNumbers";

@Component({
  selector: 'app-investment-estate',
  templateUrl: './investment-estate.component.html',
  styleUrls: ['./investment-estate.component.css']
})
export class InvestmentEstateComponent {

  baseNumbers: IBaseNumbers = {}
  constructor() {}

  consoleChange(){
    console.log(this.baseNumbers)
  }
}
