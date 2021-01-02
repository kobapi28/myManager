import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InputProps, MoneyItem } from 'src/interface';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

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
    private storageService: StorageService
  ) {
  }

  ngOnInit() {
    this.item = 
    this.props.isUpdate? 
    this.props.item : 
    {
      isIncome: this.props.isIncome,
      category: null,
      id: this.getUniqueStr(),
      memo: '',
      amount: 1000,
      date: null
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
    if(this.props.item){
      // update Item
      this.storageService.updateDetailItem(this.item);
    }else{
      // new Item
      this.item.date = new Date().toLocaleDateString();
      this.item.category = this.props.isIncome ? 'work': 'buy';
      this.storageService.pushDetailItem(this.item);
    }
    this.router.navigateByUrl(this.props.toNext);
  }


  getUniqueStr(): string {
    return (
      new Date().getTime().toString(16) +
      Math.floor(1000 * Math.random()).toString(16)
    );
  }

}
