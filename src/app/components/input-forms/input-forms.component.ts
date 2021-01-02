import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InputProps } from 'src/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-forms',
  templateUrl: './input-forms.component.html',
  styleUrls: ['./input-forms.component.scss'],
})
export class InputFormsComponent implements OnInit {
  @Input() props: InputProps;

  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {}

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
    this.router.navigateByUrl(this.props.toNext);
  }

}
