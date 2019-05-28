import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineComponent } from '../medicine/medicine.component';
import { BillComponent } from '../bill/bill.component';

const routes: Routes = [
 // {path:'', redirectTo: '/departments', pathMatch: 'full' },
  {path:'medicine', component : MedicineComponent, data: { animation: 'isLeft' }},
  {path : 'billpayment', component: BillComponent, data: { animation: 'isRight' }},
 // {path:'departments/:id',component:DepartmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
export const routingComponent=[MedicineComponent,BillComponent]