import { Component, OnInit } from '@angular/core';
import { TransitionService } from '../../services/transition.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { MoneyItem } from 'src/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item: MoneyItem;

  constructor(
    private router: Router,
    private transitionService: TransitionService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.ionViewDidEnter();
  }

  ionViewDidEnter(){
    this.item = this.transitionService.getDetailItem();
  }

  removeDetailItem(){
    this.storageService.removeDetailItem(this.item);
    this.router.navigate(['/home']);
  }

  toEdit(){
    this.router.navigate(['/edit',this.item.id]);
  }

}
