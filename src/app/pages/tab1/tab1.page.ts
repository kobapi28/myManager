import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { MoneyItem } from 'src/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datas: MoneyItem[] = [
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,30).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,28).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,28).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,25).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,22).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,22).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,22).toDateString()},
    {isIncome: true, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,20).toDateString()},
  ]

  constructor() {}

}
