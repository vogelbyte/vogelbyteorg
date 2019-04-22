import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClientModule
    ) { }
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {

    let body = {
      "id":1,
      "email":"kapil@gmail.com",
      "password":"5252"
    };
//    this.http.post("http://localhost:8082/api/admins/login",body)

    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["user"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }
