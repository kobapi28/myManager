import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MemoFormComponent } from './memo-form/memo-form.component';
import { MoneyFormComponent } from './money-form/money-form.component';

@NgModule({
  declarations: [
    MemoFormComponent,
    MoneyFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MemoFormComponent,
    MoneyFormComponent
  ]
})
export class InputFormsModule { }
