import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { AlertService } from '../alert.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  // submitted = false;
  returnUrl: string;
  loginForm: FormGroup;
  userModel=new Admin(1,'admin','admin');
 

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

    onSubmit() {
      // this.submitted = true;
      this.serviceService.login(this.userModel)
      .subscribe(
        data => console.log('success',data),
        error =>console.error('error!',error)
            // this.router.navigate([this.returnUrl]);
        
        // error => {
        //     this.alertService.error(error);
           
        // }
        );
    }


}
