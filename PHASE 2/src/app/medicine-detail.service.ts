import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MedicineDetail } from './medicineDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineDetailService {
  // private _url:string="/assets/data/medicine.json";
  _url='http://localhost:8080/vogelbyte/medicinedetail';
  constructor(private http: HttpClient) { }
  // getMedicineDetail():Observable<MedicineDetail[]>{
  //   return this.http.get<MedicineDetail[]>(this._url);
  //  }

  getMedicineDetail():Observable<MedicineDetail[]>{
    return this.http.get<MedicineDetail[]>(this._url)
  }
}
