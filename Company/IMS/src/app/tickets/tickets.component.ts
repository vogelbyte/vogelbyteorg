import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  // data:any;

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
    }

  
  //function to get random colors
  // public getRandomColor(){
  //     var letters = '0123456789ABCDEF'.split('');
  //     var color = '#';
  //     for (var i = 0; i < 6; i++){
  //         color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  // }
  

  enum_details = [
    {name: 'static'},
    {name: 'profit'},
    {name: 'generate'},
    {name: 'rohit'},
    {name: 'kapil'},
    {name: 'kapil'},
    {name: 'kapil'},
    
    ] 
  constructor() { }

  ngOnInit() {
      // this.data =  this.getRandomColor();
      // console.log("COLOR==>",this.data);
  }

  

}
