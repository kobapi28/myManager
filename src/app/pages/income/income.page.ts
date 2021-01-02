import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHome(){
    this.router.navigate(['/']);
  }

}
