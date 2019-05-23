import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillComponent } from './bill/bill.component';
import { NotesComponent } from './notes/notes.component';
import { ResizableModule } from 'angular-resizable-element';
import { TicketsComponent } from './tickets/tickets.component';
import { MedicineComponent } from './medicine/medicine.component';
import {AppRoutingModule, routingComponent } from './routing module/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    BillComponent,
    NotesComponent,
    TicketsComponent,
    TicketsComponent,
    MedicineComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    ResizableModule,
    AppRoutingModule,
    
    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }