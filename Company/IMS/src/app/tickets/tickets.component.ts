import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  // getRandomColor() {
  //   var color = Math.floor(0x1000000 * Math.random()).toString(16);
  //   return '#' + ('000000' + color).slice(-6);
  //   }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  enum_details = [
    {name: 'static'},
    {name: 'profit'},
    {name: 'generate'},
    {name: 'rohit'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    
    ] 
    
  constructor() {
    
   }

  ngOnInit() {
  }
  
}
