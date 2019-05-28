import { Component, OnInit } from '@angular/core';
import { MedicineComponent } from '../medicine/medicine.component';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  colors = ['FBC531','4CD137','33B5E5','4CD137','FF4340','FBC531','33B5E5','4CD137'];
  
    
getColor(cells){  
 var col= this.colors[Math.floor(Math.random() * this.colors.length)];
  //console.log(cells);
  return '#' + this.colors[cells];
}

  enum_details = [
    {name: 'medicine',"path":"/medicine",icon:'payment'},
    {name: 'Billpayment',"path":"/billpayment",icon:'assessment'},
    {name: 'static',"path":"/test3" ,icon:'book'},
    {name: 'Profit',"path":"/test4" ,icon:'trending_up'},
    {name: 'Chart',"path":"/test5" ,icon:'trending_down'},
    {name: 'Client',"path":"/test6" ,icon:'face'},
    {name: 'Location',"path":"/test6",icon:'verified_user'},
    {name: 'Map',"path":"/test6" ,icon:'touch_app'},
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
