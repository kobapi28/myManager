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

  toDetail(item: MoneyItem){
    this.transitionService.setDetailItem(item);
    this.router.navigate(['/detail',item.id]);
  }

}
