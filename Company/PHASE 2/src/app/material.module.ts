import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {
         MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, 
         MatTableModule,MatToolbarModule, MatMenuModule,MatIconModule,
         MatProgressSpinnerModule,MatSidenavModule,MatTabsModule,
         MatGridListModule,MatListModule, MatExpansionModule, 
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
  MatExpansionModule,
  MatAutocompleteModule,
  MatSliderModule,
  MatCheckboxModule,
  MatSlideToggleModule
                  ];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class CustomMaterialModule { }