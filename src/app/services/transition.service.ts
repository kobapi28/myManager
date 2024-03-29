import { Injectable } from '@angular/core';
import { MoneyItem } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  constructor() { }

  detailItem: MoneyItem;

  setDetailItem(item: MoneyItem){
    this.detailItem = item;
  }

  getDetailItem(){
    return this.detailItem;
  }
}
