import { Component, OnInit, Input } from '@angular/core';
import { MedicineDetailService } from '../medicine-detail.service';
import { CustmerService } from '../custmer.service';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material';

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
  show=false;
 
  public custmer=[];
  myControl = new FormControl();
  filteredOptions : Observable<string[]>;

  public rows: Array<any> = 
    [
    {company_id:'', med_name:'', batch_no:'', exp:'', quantity:'', gst:'', net_rate:'', dis:'', inc_rate:'', amount:''}
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
         // console.log("rowSelected method" ,this.selectedrow);
          this.rows[this.selectedIndex]=this.selectedrow;
          
         }
    public highlightRow(id,rows) 
         {
          this.selectedIndex = id;
          this.selectedLength=rows
          console.log( "selected index ", this.selectedIndex);
          console.log( " selected length", this.selectedLength);

         } 
     addFieldValue(i) 
        {
          console.log("your i",i);
          if(i==this.selectedLength.length-1)
          {
          this.rows.push(this.newAttribute)
          this.newAttribute = {};
          console.log("true");
          };
        
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
              private custmerService:CustmerService
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
     const filterValue = value.toLowerCase();
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


}
