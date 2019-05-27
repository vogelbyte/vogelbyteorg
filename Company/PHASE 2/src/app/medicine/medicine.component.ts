import { Component, OnInit } from '@angular/core';
import { Medicinetable } from '../servicefile/medicinetable';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
 
  constructor( private serviceService:ServiceService) { }
  dataobj="";
  medicineModel=  new Medicinetable (this.dataobj);

  ngOnInit() {
  }
  onSubmit(bb){
    console.log("Your data is ===>",JSON.stringify(bb.value));
    this.medicineModel = bb.value;
    console.log(bb);
    this.serviceService.store(this.medicineModel)
    .subscribe(
      data=>console.log('success!',data),
      error =>console.log('error!',error)
    )
  }


 
     
}
