import { Component, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MedicineDetailService } from '../medicine-detail.service';
import { CustmerService } from '../custmer.service';
import { startWith, map  } from 'rxjs/operators';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  public selectedName;
  public selectedrow=[];
  public data="";
  public rowhover="";
  public custmerdata="";
  private newAttribute: any = {};
  public medicineDetail=[];
  public custmer=[];
  myControl = new FormControl();
  filteredOptions : Observable<string[]>;

  public rows: Array<any> = 
    [
    {company_id:' ', med_name:' ', batch_no:' ', exp:' ', quantity:' ', gst:' ', net_rate:' ', dis:' ', inc_rate:' ', amount:' '}
    ];
  
    rowHover(medicine:any)
        {
          this.rowhover=medicine;
        }
    custmerRowSelect(custmer:any)
        {
          this.custmerdata=custmer;
        }
     rowSelect(medicine:any)
         {
          this.selectedrow=medicine;
          console.log(this.selectedrow);
          this.rows[this.selectedName]=this.selectedrow;
         }
    public highlightRow(emp) 
         {
          this.selectedName = emp;
          console.log( this.selectedName);
         } 
     addFieldValue() 
        {
          this.rows.push(this.newAttribute)
          this.newAttribute = {};
        }
 
  
  constructor(private medicineDetailService:MedicineDetailService,
              private custmerService:CustmerService
              ) { }
  show=false;
  
  
     
  ngOnInit() {
    this.medicineDetailService.getMedicineDetail()
      .subscribe(data=> this.medicineDetail=data);

   
    this.custmerService.getCustmer()
    .subscribe(data=> this.custmer=data);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
         map( value => this._filter(value))
         );
        }
    private _filter(value:string): any[] 
    {
     const filterValue = value.toLowerCase();
     return this.medicineDetail.filter( option =>
      option.med_name.toLowerCase().includes(filterValue)
     );
  }

}
