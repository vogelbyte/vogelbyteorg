import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { UserComponent } from './user/user.component';
import { Admin} from './admin';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  _url='http://localhost:8082/api/admins/login';
  constructor(private _http: HttpClient) { }

  login(user :Admin){
   return this._http.post<any>(this._url, user);
  }
}
