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

      if(res === null || res.length === 0){
        const items: MoneyItem[] = [];
        items.push(item);
        this.storage.set('detailItemData',items);
        this.store.dispatch(updateDetailItems({detailItems: items}))
      }else{
        const detailItems = this.sortDetailItems(item, res);
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

      // find remove item index
      const removeItemIndex = res.findIndex(_item => _item.id === item.id);
      if(res.length-1 > removeItemIndex && res[removeItemIndex].date === res[removeItemIndex+1].date){
        res[removeItemIndex+1].isDateOfPreviosItem = true;
      }

      const detailItems = res.filter(_item => _item.id !== item.id);

      this.storage.set('detailItemData',detailItems);
      this.store.dispatch(updateDetailItems({detailItems}))
    })
  }

  // from editDetail
  // update item
  updateDetailItem(updatedItem: MoneyItem, isBeforeDate: boolean){
    this.storage.get('detailItemData').then((res: MoneyItem[]) => {
      if(isBeforeDate){
        // no chenge date
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
        this.store.dispatch(updateDetailItems({detailItems}));
      }else{
        // changed
        // update nowValue
        updatedItem.isDateOfPreviosItem = true;
        // find remove item index
        const removeItemIndex = res.findIndex(_item => _item.id === updatedItem.id);
        if(res.length-1 > removeItemIndex && res[removeItemIndex].date === res[removeItemIndex+1].date){
          res[removeItemIndex+1].isDateOfPreviosItem = true;
        }


        for (const item of res) {
          if(item.id === updatedItem.id){
            if(updatedItem.isIncome){
              this.updateNowValue(updatedItem.amount, item.amount);
            }else{
              this.updateNowValue(item.amount, updatedItem.amount);
            }
            break;
          }
        }
        // delete item
        let detailItems = res.filter(item => item.id !== updatedItem.id);
        // push new item
        detailItems = this.sortDetailItems(updatedItem, detailItems);
        this.storage.set('detailItemData',detailItems);
        this.store.dispatch(updateDetailItems({detailItems}));
      }
    })
  }

  // sort items by date
  sortDetailItems(pushItem: MoneyItem, items: MoneyItem[]){
    let pushed: boolean = false;
    let setIndex: number = items.length;

    items.forEach((item, index) => {
      if(item.date < pushItem.date && !pushed){
        setIndex = index;
        pushed = true;
      }else if(item.date === pushItem.date && !pushed){
        setIndex = index;
        pushed = true;
        item.isDateOfPreviosItem = false;
      }
    })

    items.splice(setIndex, 0, pushItem);
    return items;
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
