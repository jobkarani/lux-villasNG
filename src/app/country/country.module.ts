import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryComponent } from './country.component';
import { SharedModule } from '../shared/shared.module';
import { CountryRoutingModule } from './country-routing.module';



@NgModule({
  declarations: [
    CountryComponent,
    CountryListComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule,
  ]
})
export class CountryModule { }
