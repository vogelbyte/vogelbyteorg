import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { UserComponent } from './user/user.component';
import { Admin} from './admin';
import { Billpayment } from './servicefile/billpayment';
import { Medicinetable } from './servicefile/medicinetable';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // _url='http://localhost:8082/api/admins/login';
  _url='http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }
  send(bill:Billpayment){
    return this._http.post<any>(this._url,bill);
   }
  login(user :Admin){
   return this._http.post<any>(this._url, user);
  }
  store(medicine:Medicinetable){
    return this._http.post<any>(this._url,medicine);
   }
}
