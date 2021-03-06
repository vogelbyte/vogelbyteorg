import { Component, OnInit, Input } from '@angular/core';
import { MedicineDetailService } from '../medicine-detail.service';
import { CustmerService } from '../custmer.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import { Billpayment } from '../servicefile/billpayment';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
 // public show:boolean = false;
 public buttonName:any = 'Show';
  public selectedIndex;
  public selectedLength;
  public selectedrow=[];
  public data="";
  public rowhover="";
  public custmerdata="";
  private newAttribute: any = {};
  public medicineDetail =[];
  public seachtable=[];
  public rownumber;
  public newrow = {company_id:'', med_name:'', batch_no:'', exp:'', quantity:'', gst:'', net_rate:'', dis:'', inc_rate:'', amount:''};
  show=false;
 
  public custmer=[];
  myControl = new FormControl();
  filteredOptions : Observable<string[]>;

  public rows: Array<any> = 
    [
    {company_id:'', med_name:'', batch_no:'', exp:'', quantity:'', gst:'', net_rate:'', dis:'', inc_rate:'', amount:''}
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
          console.log("this.rownumber==>",this.rownumber);
          this.rows[this.rownumber]=this.selectedrow;
          console.log("this.fhfhfhfhfhfh  ==>",this.rows[this.rownumber]);
          
         }
    public highlightRow(id,rows) 
         {
          this.selectedIndex = id;
          this.selectedLength=rows
          console.log( "selected index ", this.selectedIndex);
          console.log( " selected length", this.selectedLength);

         } 
     addFieldValue(rows) 
        {
          console.log("your i",rows);
          // if(i==this.selectedLength.length-1)
          // {
          this.rows.push(this.newrow);
          this.rows = rows;
          this.newAttribute = {};
          console.log("true");
          // };
        
        console.log("false");

        }
        showTable(){
        this.show=true
        }
        hideTable(){
          this.show=false;
        }
        displayFn(subject){
          return subject ? subject.company_id :undefined;
        }
  constructor(private medicineDetailService:MedicineDetailService,
              private custmerService:CustmerService,
              private serviceService:ServiceService
              ) { }
 

  displayedColumns: any[] = ['med_name'];
  dataSource = new MatTableDataSource(this.medicineDetail);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
     
  ngOnInit() {
   // console.log(this.medicineDetail[].med_name);
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
     const filterValue = value;
     return this.medicineDetail.filter( option =>
      option.med_name.toLowerCase().includes(filterValue)
     );
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    // if(this.show)  
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
  }

  sendSearchString(medName,i){
    console.log("MED DATA===>",medName);
    console.log("MED DATA1212===>",i);
    this.rownumber=i;
    for(let i=0;i<this.medicineDetail.length;i++){
        if(medName.includes(this.medicineDetail[i].med_name)!=true){
          this.seachtable[i] = this.medicineDetail[i];
          console.log("SEARCHED OBJECT==>",this.dataSource);
        }
    }

  }


  register(userMedicine){
    console.log("Your data is ===>",JSON.stringify(userMedicine.value));
    this.billModel = userMedicine.value;
    console.log(userMedicine);
    this.serviceService.send(this.billModel)
    .subscribe(
      data=>console.log('success!',data),
      error =>console.log('error!',error)
    )
  }

}