import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailListComponent } from './detail-list/detail-list.component';

@NgModule({
  declarations: [
    DetailListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailListComponent
  ]
})
export class DetailListsModule { }
