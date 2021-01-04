import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Store, select } from '@ngrx/store';
import { getMaxAmount } from 'src/app/store/data';
import { AlertController } from '@ionic/angular';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  maxAmount$ = this.store.pipe(select(getMaxAmount));

  constructor(
    private storageService: StorageService,
    private store: Store,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(){
    this.storageService.loadMaxAmount();
  }

  updateMaxAmount(maxAmount: number){
    console.log(maxAmount)
    this.storageService.updateMaxAmount(maxAmount);
  }

  deleteStorageData(){
    this.storageService.deleteAllData();
  }

  // update alert
  async presentAlertPrompt() {
    const maxAmount = this.maxAmount$;
    const alert = await this.alertCtrl.create({
      header: '目標金額を変更する',
      message: `今の目標金額は${maxAmount}円です。変更するには下の入力欄に値を入れ、変更を押してください。`,
      inputs: [
        {
          name: 'value',
          type: 'number',
          placeholder: 'value',
        }
      ],
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
        }, {
          text: '変更',
          handler: (alertData) => {
            if(alertData.value!==''){
              this.updateMaxAmount(alertData.value);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // delete alert
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'データを削除する',
      message: '「はい」を選択するとこのアプリ内で保存されているデータがすべて削除されます。よろしいですか？',
      buttons: [
        {
          text: 'いいえ',
          role: 'cancel'
        },
        {
          text: 'はい',
          handler: () => {
            this.deleteStorageData();
          }
        }
      ]
    });

    await alert.present();
  }

}
