import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GenreTileComponent } from './genre-tile/genre-tile.component';

@NgModule({
  declarations: [
    GenreTileComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GenreTileComponent
  ]
})
export class GenreTilesModule { }
