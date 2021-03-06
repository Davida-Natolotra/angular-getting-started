import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}
  add() {
    this.count += 1;
  }
  minus() {
    this.count -= 1;
  }
  reset() {
    this.count = 0;
  }
}
