import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { PopuptableComponent } from '../popuptable/popuptable.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  
  constructor() { }
  show=false;
  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(PopuptableComponent, {
      
  //   });
  // }
  ngOnInit() {
  }

}
