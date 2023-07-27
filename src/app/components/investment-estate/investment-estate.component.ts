import { Component } from '@angular/core';
import {IBaseNumbers} from "../../interface/IBaseNumbers";

@Component({
  selector: 'app-investment-estate',
  templateUrl: './investment-estate.component.html',
  styleUrls: ['./investment-estate.component.css']
})
export class InvestmentEstateComponent {

  baseNumbers: IBaseNumbers = {}
  sumBaseNumbers: number = 0
  constructor() {}

  consoleChange(){
    console.log(this.baseNumbers)
    let nums = Object.values(this.baseNumbers)
    let sum = 0
    for(let i = 0; i < nums.length; i++){
      sum += nums[i];
    }
    this.sumBaseNumbers = sum
    console.log(this.sumBaseNumbers)
  }
}
