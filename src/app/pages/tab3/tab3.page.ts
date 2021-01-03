import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  maxAmount: number;

  constructor(private storageService: StorageService) {}

  updateMaxAmount(){
    console.log(this.maxAmount)
    this.storageService.updateMaxAmount(this.maxAmount);
  }

  deleteStorageData(){
    this.storageService.removeAllDetailItems();
  }

}
