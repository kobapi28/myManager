import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';
import { MoneyItem } from 'src/interface';
import { updateDetailItems, updateMaxAmount } from '../store/data';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage,
    private store: Store
  ) { }

  //
  // detailItems
  //

  // from Home
  loadDetailItems(){
    return this.storage.get('detailItemData').then((res: MoneyItem[]) => {
      this.store.dispatch(updateDetailItems({detailItems: res}));
      return res;
    })
  }

  // from income,expensees
  // add item
  pushDetailItem(item: MoneyItem){
    this.storage.get('detailItemData').then((res: MoneyItem[]) => {
      const items = [];
      items.push(item);
      const detailItems = items.concat(res);
      this.storage.set('detailItemData',detailItems);
      this.store.dispatch(updateDetailItems({detailItems}))
    })
  }

  //  from detail
  //  remove item
  removeDetailItem(id: string){
    this.storage.get('detailItemData').then((res: MoneyItem[]) => {
      const detailItems = res.filter(item => item.id !== id);
      this.storage.set('detailItemData',detailItems);
      this.store.dispatch(updateDetailItems({detailItems}))
    })
  }

  // from editDetail
  // update item
  updateDetailItem(updatedItem: MoneyItem){
    this.storage.get('detailItemData').then((res: MoneyItem[]) => {
      const detailItems = res.map(item => {
        if(item.id === updatedItem.id){
          return updatedItem;
        }else{
          return item;
        }
      })
      this.storage.set('detailItemData',detailItems);
      this.store.dispatch(updateDetailItems({detailItems}))
    })
  }


  //
  // maxAmount
  //

  // from Report
  loadMaxAmount(){
    return this.storage.get('maxAmount').then((res: number) => {
      this.store.dispatch(updateMaxAmount({maxAmount: res}));
      return res;
    })
  }

  // from setting
  // update maxAmount
  updateMaxAmount(maxAmount: number){
    this.storage.set('maxAmount',maxAmount);
    this.store.dispatch(updateMaxAmount({maxAmount: maxAmount}));
  }
}
