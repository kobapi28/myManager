import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputProps } from 'src/interface';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {
  props: InputProps = {buttonName: '収入を確定', buttonColor: 'danger', tileNames: [], toNext: 'home', isIncome: true, isUpdate: false}

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this.router.navigate(['/']);
  }

}
