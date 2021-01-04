import { Component, OnInit } from '@angular/core';
import { MoneyItem } from 'src/interface';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getDetailItems, getNowValue } from 'src/app/store/data';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  datas$ = this.store.pipe(select(getDetailItems));
  nowValue$ = this.store.pipe(select(getNowValue));

  constructor(
    private router: Router,
    private store: Store,
    private storageService: StorageService
  ) {}

  ngOnInit(){
    this.storageService.loadDetailItems();
    this.storageService.loadNowValue();
  }

  toIncome(){
    this.router.navigate(['/income']);
  }

  toExpenses(){
    this.router.navigate(['/expenses']);
  }

}
