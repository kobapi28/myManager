import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DetailListComponent } from './detail-list/detail-list.component';

@NgModule({
  declarations: [
    DetailListComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DetailListComponent
  ]
})
export class DetailListsModule { }
