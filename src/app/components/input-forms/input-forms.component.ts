import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InputProps, MoneyItem } from 'src/interface';
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
  }

  updateDetailItems(){
    if(this.props.isUpdate){
      // update Item
      this.storageService.updateDetailItem(this.item);
      this.transitionService.setDetailItem(this.item);
      this.router.navigate([this.props.toNext,this.item.id]);
    }else{
      // new Item
      this.item.category = this.props.isIncome ? 'work': 'buy';
      console.log(this.item);
      this.storageService.pushDetailItem(this.item);
      this.router.navigate([this.props.toNext]);
    }
  }


  getUniqueStr(): string {
    return (
      new Date().getTime().toString(16) +
      Math.floor(1000 * Math.random()).toString(16)
    );
  }

}
