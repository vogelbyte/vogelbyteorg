import { Component, OnInit, Input } from '@angular/core';
import { MedicineDetailService } from '../medicine-detail.service';
import { CustmerService } from '../custmer.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';
import { Billpayment } from '../servicefile/billpayment';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  public selectedIndex;
  public selectedLength;
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
    dataobj="";
    billModel=  new Billpayment (this.dataobj);
     billModelArray:Billpayment[];
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
          console.log("rowSelected method" ,this.selectedrow);
          this.rows[this.selectedIndex]=this.selectedrow;
          
         }
    public highlightRow(id,rows) 
         {
          this.selectedIndex = id;
          this.selectedLength=rows
          console.log( "id ", this.selectedIndex);
          console.log( "length", this.selectedLength);

         } 
     addFieldValue(i) 
        {
          if(i==this.selectedLength.length-1)
          this.rows.push(this.newAttribute)
          this.newAttribute = {};
        }
 
        displayFn(subject){
          return subject ? subject.company_id :undefined;
        }
  constructor(private medicineDetailService:MedicineDetailService,
              private custmerService:CustmerService,
              private serviceService:ServiceService
              ) { }
  show=false;
  
  
     
  ngOnInit() {
    this.medicineDetailService.getMedicineDetail()
      .subscribe(data=> this.medicineDetail=data);

   
    this.custmerService.getCustmer()
    .subscribe(data=> this.custmer=data);

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
         map( value => this._filter(value.toLowerCase()))
         );
        }
    private _filter(value:string): any[] 
    {
     const filterValue = value.toLowerCase();
     return this.medicineDetail.filter( option =>
      option.med_name.toLowerCase().includes(filterValue)
     );
  }
  // onSubmit(test){
  //  console.log("You are here===>",test); 
  //   this.serviceService.send(this.billModel)
  register(bb){
    console.log("Your data is ===>",JSON.stringify(bb.value));
    this.billModel = bb.value;
    console.log(bb);
    this.serviceService.send(this.billModel)
    .subscribe(
      data=>console.log('success!',data),
      error =>console.log('error!',error)
    )
  }
}
