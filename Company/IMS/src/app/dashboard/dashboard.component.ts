import { Component, OnInit, ViewEncapsulation } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  isMenuOpen=true;
  constructor() { }

  ngOnInit() {
  }
   
    tiles: Tile[] = [
      {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
      {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 1, rows: 5, color: '#DDBDF1'},
      {text: 'five', cols: 2, rows: 4, color: 'yellow'},
    ];
  
}


