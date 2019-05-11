import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
 
  // panel_detail =[
  //   {tittle:'Unit'},
  //   {tittle:'Sale Detail'},
  //   {tittle:'Purchase Detail' ,expanded:'true'},
  //   {tittle:'Purchase Detail'},
  // ]
  
  constructor() { }

  ngOnInit() {
  }

}
