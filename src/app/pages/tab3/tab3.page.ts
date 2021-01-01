import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MoneyItem } from 'src/interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  maxAmount: number;
  result: MoneyItem[];
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

  constructor(private storage: Storage) {}

  setValue(){
    this.storage.set('maxAmount',20000);
    this.storage.set('data',this.datas);
  }

  getValue(){
    this.storage.get('maxAmount').then(res => {
      this.maxAmount = res;
    })
    this.storage.get('data').then(res => {
      this.result = res;
    })
  }

}
