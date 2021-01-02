import { Component } from '@angular/core';
import { MoneyItem } from 'src/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datas: MoneyItem[] = [
    {isIncome: false, category: 'eat', id: 'a', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: false, category: 'eat', id: 'b', memo: 'clothes', amount: 2000, date: new Date().toDateString()},
    {isIncome: true, category: 'work', id: 'c', memo: '', amount: 300000, date: new Date().toDateString()},
    {isIncome: false, category: 'eat', id: 'd', memo: 'clothes', amount: 500, date: new Date(2020,11,30).toDateString()},
    {isIncome: false, category: 'eat', id: 'e', memo: 'clothes', amount: 1000, date: new Date(2020,11,28).toDateString()},
    {isIncome: false, category: 'eat', id: 'f', memo: 'clothes', amount: 2000, date: new Date(2020,11,28).toDateString()},
    {isIncome: false, category: 'eat', id: 'g', memo: 'clothes', amount: 2000, date: new Date(2020,11,25).toDateString()},
    {isIncome: false, category: 'eat', id: 'h', memo: 'clothes', amount: 3000, date: new Date(2020,11,22).toDateString()},
    {isIncome: false, category: 'eat', id: 'i', memo: 'clothes', amount: 600, date: new Date(2020,11,22).toDateString()},
    {isIncome: false, category: 'eat', id: 'j', memo: 'clothes', amount: 800, date: new Date(2020,11,22).toDateString()},
    {isIncome: false, category: 'eat', id: 'k', memo: 'clothes', amount: 3000, date: new Date(2020,11,20).toDateString()},
  ]

  constructor(private router: Router) {}

  toIncome(){
    this.router.navigate(['/income']);
  }

  toExpenses(){
    this.router.navigate(['/expenses']);
  }

}
