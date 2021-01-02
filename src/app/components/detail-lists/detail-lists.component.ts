import { Component, Input, OnInit } from '@angular/core';
import { MoneyItem } from 'src/interface';
import { Router } from '@angular/router';
import { TransitionService } from '../../services/transition.service';

@Component({
  selector: 'app-detail-lists',
  templateUrl: './detail-lists.component.html',
  styleUrls: ['./detail-lists.component.scss'],
})
export class DetailListsComponent implements OnInit {
  @Input() items: MoneyItem[];
  constructor(
    private router: Router,
    private transitionService: TransitionService
  ) { }

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

  toDetail(item: MoneyItem){
    this.transitionService.setDetailItem(item);
    this.router.navigate(['/detail',item.id]);
  }

}
