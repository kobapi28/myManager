import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputProps } from 'src/interface';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {
  props: InputProps = {buttonName: '支出を確定', tileNames: [], toNext: 'home'}

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this.router.navigate(['/']);
  }

}
