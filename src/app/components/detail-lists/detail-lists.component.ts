import { Component, Input, OnInit } from '@angular/core';
import { MoneyItem } from 'src/interface';
import { DetailListsModule } from './detail-lists.module';

@Component({
  selector: 'app-detail-lists',
  templateUrl: './detail-lists.component.html',
  styleUrls: ['./detail-lists.component.scss'],
})
export class DetailListsComponent implements OnInit {
  @Input() items: MoneyItem[];
  constructor() { }

  ngOnInit() {}

  checkDate(i:number){
    if(i===0){
      return true;
    }

    if(this.items[i].date === this.items[i-1].date){
      return false;
    }else{
      return true;
    }
  }

}
