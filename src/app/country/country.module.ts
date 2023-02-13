import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryComponent } from './country.component';
import { SharedModule } from '../shared/shared.module';
import { CountryRoutingModule } from './country-routing.module';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    CountryComponent,
    CountryListComponent,
    CountryDetailsComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule,
  ]
})
export class CountryModule { }
