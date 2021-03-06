import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Admin } from '../admin';
import { ServiceService } from '../service.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  
  // submitted = false;
  returnUrl: string;
  loginForm: FormGroup;
  userModel=new Admin('','');
 

  constructor(
        // private http: HttpClientModule,
        // private formBuilder: FormBuilder,
        // private route: ActivatedRoute,
        private router: Router,
        private serviceService:ServiceService,
        private alertService: AlertService
    ) {}


    ngOnInit() {
    //   this.loginForm = this.formBuilder.group({
    //       username: ['', Validators.required],
    //       password: ['', Validators.required]
    //   });
    
     } 
// username: string;
// password: string;
  // ngOnInit() {
  // }
  // login() : void {

  //   let body = {
  //       "email":"dheeraj@gmail.com",
  //       "password":"5252"
  //       };
  //  this.http.post("http://localhost:8082/api/admins/login",body).subscribe((data:any)=>{
  //     console.log("this is here ==>",data);
  //  });
   

  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["user"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }

    onSubmit() {
      // this.submitted = true;
      this.serviceService.login(this.userModel)
      .subscribe(
        data => console.log('success',data),
        error =>console.error('error!',error)
          
        );
    }


}
