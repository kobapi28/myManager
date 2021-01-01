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
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: true, category: 'work', memo: '', amount: 300000, date: new Date().toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 500, date: new Date(2020,11,30).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 1000, date: new Date(2020,11,28).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,28).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 2000, date: new Date(2020,11,25).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 3000, date: new Date(2020,11,22).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 600, date: new Date(2020,11,22).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 800, date: new Date(2020,11,22).toDateString()},
    {isIncome: false, category: 'eat', memo: 'clothes', amount: 3000, date: new Date(2020,11,20).toDateString()},
  ]

  constructor() {}

}
