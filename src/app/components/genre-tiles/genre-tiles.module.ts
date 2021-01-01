import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreTileComponent } from './genre-tile/genre-tile.component';

@NgModule({
  declarations: [
    GenreTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenreTileComponent
  ]
})
export class GenreTilesModule { }
