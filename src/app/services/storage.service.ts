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

  // from setting
  // remove all item
  deleteAllData(){
    this.storage.clear();
    const detailItems: MoneyItem[] = [];
    const maxAmount: number = 0;
    this.store.dispatch(updateDetailItems({detailItems}));
    this.store.dispatch(updateMaxAmount({maxAmount}));
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
