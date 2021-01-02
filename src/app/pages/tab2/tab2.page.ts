import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getMaxAmount } from 'src/app/store/data';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  maxAmount$ = this.store.pipe(select(getMaxAmount));

  constructor(
    private store: Store,
    private storageService: StorageService
  ) { }

  ngOnInit(){
    this.storageService.loadMaxAmount();
  }

}
