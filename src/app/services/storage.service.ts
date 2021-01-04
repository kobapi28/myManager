import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';
import { MoneyItem } from 'src/interface';
import { updateDetailItems, updateMaxAmount, updateNowValue } from '../store/data';


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
      // update nowValue
      if(item.isIncome){
        this.updateNowValue(item.amount, 0);
      }else{
        this.updateNowValue(0, item.amount);
      }

      const items: MoneyItem[] = [];
      items.push(item);
      // 直近のアイテムの日付と同じならfalseにする
      console.log(res);
      if(res === null){
        // storage に何もない場合 (null)
        this.storage.set('detailItemData',items);
        this.store.dispatch(updateDetailItems({detailItems: items}))
      }else if(res.length === 0){
        // storage に何もない場合 (0)
        this.storage.set('detailItemData',items);
        this.store.dispatch(updateDetailItems({detailItems: items}))
      }else if(res[0].date === item.date){
        //  storage に値は存在し、最新が今日の場合
        res[0].isDateOfPreviosItem = false;
        const detailItems = items.concat(res);
        this.storage.set('detailItemData',detailItems);
        this.store.dispatch(updateDetailItems({detailItems}))
      }else{
        //  storage に値は存在し、最新が前日よりも古い場合
        const detailItems = items.concat(res);
        this.storage.set('detailItemData',detailItems);
        this.store.dispatch(updateDetailItems({detailItems}))
      }
    })
  }

  //  from detail
  //  remove item
  removeDetailItem(item: MoneyItem){
    this.storage.get('detailItemData').then((res: MoneyItem[]) => {
      // update nowValue
      if(item.isIncome){
        this.updateNowValue(0, item.amount);
      }else{
        this.updateNowValue(item.amount, 0);
      }

      const detailItems = res.filter(_item => _item.id !== item.id);
      if(detailItems.length > 0){
        detailItems[0].isDateOfPreviosItem = true;
      }
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
          // update nowValue
          if(updatedItem.isIncome){
            this.updateNowValue(updatedItem.amount, item.amount);
          }else{
            this.updateNowValue(item.amount, updatedItem.amount);
          }
          return updatedItem;
        }else{
          return item;
        }
      })
      this.storage.set('detailItemData',detailItems);
      this.store.dispatch(updateDetailItems({detailItems}))
    })
  }

  // from setting
  // remove all item
  deleteAllData(){
    this.storage.clear();
    const detailItems: MoneyItem[] = [];
    const maxAmount: number = 0;
    const nowValue: number = 0;
    this.store.dispatch(updateDetailItems({detailItems}));
    this.store.dispatch(updateMaxAmount({maxAmount}));
    this.store.dispatch(updateNowValue({nowValue}));
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


  //
  //  nowValue
  //

  // from home
  loadNowValue(){
    this.storage.get('nowValue').then((res: number) => {
      if(res === null){
        res = 0;
      }
      this.store.dispatch(updateNowValue({nowValue: res}));
    })
  }

  // from income,expense,edit
  // update nowValue
  updateNowValue(beforeValue: number, newValue: number){
    this.storage.get('nowValue').then((res: number) => {
      const nowValue = res - (newValue - beforeValue);
      this.storage.set('nowValue', nowValue);
      this.store.dispatch(updateNowValue({nowValue: nowValue}));
    })
  }
}
