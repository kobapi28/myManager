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
    this.item = 
    this.props.isUpdate? 
    this.transitionService.getDetailItem() : 
    {
      isIncome: this.props.isIncome,
      category: null,
      id: this.getUniqueStr(),
      memo: '',
      amount: 1000,
      date: null,
      isDateOfPreviosItem: true
    };
  }

  async presentMemoAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: '',
      header: 'memo',
      inputs: [
        {
          type: 'text',
          placeholder: 'memo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  updateDetailItems(){
    // TODO: choice function
    if(this.props.isUpdate){
      // update Item
      let detailItem = Object.freeze(this.item);
      detailItem = {
        isIncome: this.item.isIncome, // keep
        category: this.item.category,
        id: this.item.id, // keep
        memo: this.item.memo,
        amount: Math.floor(Math.random() * 10000),
        date: this.item.date, // keep,
        isDateOfPreviosItem: this.item.isDateOfPreviosItem // keep
      }
      this.storageService.updateDetailItem(detailItem);
      this.transitionService.setDetailItem(detailItem);
      this.router.navigate([this.props.toNext,this.item.id]);
    }else{
      // new Item
      this.item.date = new Date().toLocaleDateString();
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
