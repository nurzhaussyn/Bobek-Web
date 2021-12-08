import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  counter:number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  pageInc(num: number) {
    this.counter = num;
  }
  pageDec(num: number) {
    if(this.counter === 0) {
      this.counter = 1;
    }
    this.counter--;
  }
  page() {
    this.counter++;
    if(this.counter===6) {
      this.counter = 1;
    }
  }
}
