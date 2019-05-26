import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MedicineDetail } from './medicineDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustmerService {
  private _url:string="/assets/data/custmer.json";

  constructor(private http: HttpClient) { }

  getCustmer():Observable<MedicineDetail[]>{
    return this.http.get<MedicineDetail[]>(this._url);
   }
}
