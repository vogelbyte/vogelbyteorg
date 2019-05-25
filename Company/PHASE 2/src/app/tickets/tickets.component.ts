import { Component, OnInit } from '@angular/core';
import { MedicineComponent } from '../medicine/medicine.component';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
  getRandomColor() {
    // var color = Math.floor(0x1000000 * Math.random()).toString(16);
    // return '#' + ('000000' + color).slice(-6);
   return '#' + this.colors[Math.floor(Math.random() * this.colors.length)];
    }
 
// for(var i = 0; i < cells.length; i++) {
//     cells[i].style.backgroundColor = '#' + colors[Math.floor(Math.random() * colors.length)];
// }

  enum_details = [
    {name: 'medicine',"path":"/medicine"},
    {name: 'Billpayment',"path":"/billpayment"},
    {name: 'generate',"path":"/test3"},
    {name: 'rohit',"path":"/test4"},
    {name: 'kapil',"path":"/test5"},
    {name: 'kapil',"path":"/test6"},
    ] 

  constructor(
    private router: Router
  ) {
    
   }

   resendEmail(i){
     this.router.navigate([this.enum_details[i].path]);
     this.router.navigate([this.enum_details[i].path]);

   }
   
  ngOnInit() {
      // this.data =  this.getRandomColor();
      // console.log("COLOR==>",this.data);
  }
  
}
