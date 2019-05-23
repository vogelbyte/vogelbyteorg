import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  serviceService: any;
  
   constructor() { }
  
  show:false;
 
  enum_details = [
    {row: '1'},
    {row: '2'},
    {row: '3'},
    {row: '4'},
    {row: '5'},
     ] 
  ngOnInit() {}
  
}
