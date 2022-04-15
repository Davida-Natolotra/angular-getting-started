import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-fanandramana',
  templateUrl: './fanandramana.component.html',
  styleUrls: ['./fanandramana.component.css'],
})
export class FanandramanaComponent implements OnInit {
  @Input() anarana: string = '';

  constructor() {}
  public getScreenWidth: any;
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
