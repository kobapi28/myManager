import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailListsComponent } from './detail-lists/detail-lists.component';
import { GenreTilesComponent } from './genre-tiles/genre-tiles.component';
import { InputFormsComponent } from './input-forms/input-forms.component';

import { DateFormComponent } from './date-form/date-form.component';

import { DetailListsModule } from './detail-lists/detail-lists.module';
import { GenreTilesModule } from './genre-tiles/genre-tiles.module';
import { InputFormsModule } from './input-forms/input-forms.module';

@NgModule({
  declarations: [
    DetailListsComponent,
    GenreTilesComponent,
    InputFormsComponent,
    DateFormComponent
  ],
  imports: [
    CommonModule,
    DetailListsModule,
    GenreTilesModule,
    InputFormsModule
  ],
  exports: [
    DetailListsComponent,
    GenreTilesComponent,
    InputFormsComponent,
    DateFormComponent
  ]
})
export class ComponentsModule { }
