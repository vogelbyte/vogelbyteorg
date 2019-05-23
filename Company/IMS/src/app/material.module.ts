import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
         MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, 
         MatTableModule,MatToolbarModule, MatMenuModule,MatIconModule,
         MatProgressSpinnerModule,MatSidenavModule,MatTabsModule,
         MatGridListModule,MatListModule, MatExpansionModule
} from '@angular/material';

const MaterialComponents =[CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatTabsModule,
  MatGridListModule,
  MatListModule,
  MatExpansionModule];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class CustomMaterialModule { }