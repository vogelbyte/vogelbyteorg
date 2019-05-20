import { Component, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MedicineDetailService } from '../medicine-detail.service';
import { CustmerService } from '../custmer.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  
  public data:any[];
  public rowhover="";
  public custmerdata="";
  public rows=[
    {},
    {}
    
  ];
  
  public medicineDetail=[];
  public custmer=[];
  
  constructor(private medicineDetailService:MedicineDetailService,
    private custmerService:CustmerService
    ) { }
  show=false;
  
  rowSelect(medicine:any){
     
    this.data=medicine;
   }
   rowHover(medicine:any)
   {
     
    this.rowhover=medicine;
   }
   custmerRowSelect(custmer:any)
   {
    this.custmerdata=custmer;
   }

   private fieldArray: Array<any> = [];
   private newAttribute: any = {};
   addFieldValue() 
   {
     this.fieldArray.push(this.newAttribute)
     this.newAttribute = {};
    }
   displayFn(subject){
     return subject ?subject.company_id:undefined;
   }

  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(PopuptableComponent, {
      
  //   });
  // }
  ngOnInit() {
    this.medicineDetail = this.medicineDetailService.getMedicineDetail();
   
    this.custmerService.getCustmer()
    .subscribe(data=> this.custmer=data);

  }

}
