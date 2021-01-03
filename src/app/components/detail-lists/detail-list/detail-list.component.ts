import { Component, Input, OnInit } from '@angular/core';
import { MoneyItem } from 'src/interface';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss'],
})
export class DetailListComponent implements OnInit {
  @Input() item: MoneyItem;
  constructor() { }

  ngOnInit() {}

}
