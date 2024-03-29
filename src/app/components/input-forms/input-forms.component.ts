import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { expensesCategory, incomeCategory, InputProps, MoneyItem } from 'src/interface';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.scss'],
})
export class InputFormsComponent implements OnInit {
  @Input() props: InputProps;
  item: MoneyItem;
  categories: incomeCategory[] | expensesCategory[] = [];
  beforeDate: string;

  // 収入のカテゴリの配列
  incomeCategories: incomeCategory[] = ['給料', 'おこづかい', '賞与', '臨時収入', 'その他'];
  // 支出のカテゴリの配列
  expensesCategories: expensesCategory[] = ['食費', '日用品', '衣服', '美容', '交際費', '医療費', '教育費', '光熱費', '交通費', '通信費', '住居費', 'その他'];



  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private storageService: StorageService,
    private transitionService: TransitionService
  ) {
  }

  ngOnInit() {
    if(this.props.isUpdate){
      const item = this.transitionService.getDetailItem();
      this.beforeDate = item.date;
      this.item = {
        isIncome: item.isIncome,
        category: item.category,
        id: item.id,
        title: item.title,
        memo: item.memo,
        amount: item.amount,
        date: item.date,
        isDateOfPreviosItem: item.isDateOfPreviosItem
      };
    }else{
      this.item = {
        isIncome: this.props.isIncome,
        category: null,
        id: this.getUniqueStr(),
        title: '',
        memo: '',
        amount: 0,
        date: null,
        isDateOfPreviosItem: true
      };
    }

    this.categories = this.item.isIncome ? this.incomeCategories : this.expensesCategories;
  }

  selectCategory(category: incomeCategory | expensesCategory){
    this.item.category = category;
  }

  updateDetailItems(){
    if(this.props.isUpdate){
      // update Item
      const item = this.item;
      item.date = this.formatDate(item.date);
      const isBeforeDate: boolean = item.date === this.beforeDate;
      this.storageService.updateDetailItem(item, isBeforeDate);
      this.transitionService.setDetailItem(item);
      this.router.navigate([this.props.toNext,item.id]);
    }else{
      // new Item
      const item = this.item;
      item.date = this.formatDate(item.date);
      this.storageService.pushDetailItem(item);
      this.router.navigate([this.props.toNext]);
    }
  }


  getUniqueStr(): string {
    return (
      new Date().getTime().toString(16) +
      Math.floor(1000 * Math.random()).toString(16)
    );
  }

  formatDate(date: string): string {
    // 2021-01-01T... -> 2021-01-01 
    return date.split('T')[0];
  }

}
