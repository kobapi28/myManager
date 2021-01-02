import { Component, OnInit } from '@angular/core';
import { InputProps } from 'src/interface';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.page.html',
  styleUrls: ['./edit-detail.page.scss'],
})
export class EditDetailPage implements OnInit {
  props: InputProps = {buttonName: '更新', tileNames: [], toNext: 'detail', isUpdate: true}

  constructor() { }

  ngOnInit() {
  }

}
