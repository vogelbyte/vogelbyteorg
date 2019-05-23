import { Component, OnInit } from '@angular/core';


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
 

  enum_details = [
    {name: 'static',"path":"/addMed"},
    {name: 'profit'},
    {name: 'generate'},
    {name: 'rohit'},
    {name: 'kapil'},
    {name: '1'},
    {name: 'generate'},
    {name: 'rohit'},
    {name: 'kapil'},
    ] 
    
  constructor() {
    
   }

  ngOnInit() {
      // this.data =  this.getRandomColor();
      // console.log("COLOR==>",this.data);
  }
  
}
