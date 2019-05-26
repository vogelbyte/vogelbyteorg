import { Component } from '@angular/core';
import { User } from './user'; 
import { from } from 'rxjs';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'jeson'];
  topicHasError=true;
  //  userModel=  new User ('','', '','','','','','','','', '','','','','','','', '','','','','');
  userModel=  new User ('','', '');
  constructor(private _enrollmentService:EnrollmentService){}
validateTopic(value){
  if(value==='default'){
    this.topicHasError=true;
  }else{
    this.topicHasError=false;
  }
  
}
rowClicked(row_selected: any): void {
  console.log(row_selected);
}


enum_details = [
  {row: '1'},
  {row: '2'},
  {row: '3'},
  {row: '4'},
  {row: '5'},
   ] 
   register(bb){
 console.log("Your data is ===>",JSON.stringify(bb.value));
 this.userModel = bb.value;
 console.log(bb);

  this._enrollmentService.enroll(this.userModel)
  .subscribe(
    data=>console.log('success!',data),
    error =>console.log('error!',error)
  )
}
}
