import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MedicineDetail } from './medicineDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineDetailService {
  // private _url:string="/assets/data/medicine.json";
   _url:"http://localhost:8080/vogelbyte/medicinedetail";
  constructor(private http: HttpClient,
     med: MedicineDetail  ) { }
  med : any[];
  // getMedicineDetail():Observable<MedicineDetail[]>{
  //   return this.http.get<MedicineDetail[]>(this._url);
  //  }

  getMedicineDetail(){
    this.http.get(this._url).subscribe(
      (data:any[])=>{
        this.med = data;
      }
    )
    return this.med;
  }
}
