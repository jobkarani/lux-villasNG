import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityListComponent } from './sustainability-list/sustainability-list.component';
import { SustainabilityDetailsComponent } from './sustainability-details/sustainability-details.component';
import { SustainabilityComponent } from './sustainability.component';
import { SharedModule } from '../shared/shared.module';
import { SustainabilityRoutingModule } from './sustainability-routing.module';



@NgModule({
  declarations: [
    SustainabilityComponent,
    SustainabilityListComponent,
    SustainabilityDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SustainabilityRoutingModule,
  ]
})
export class SustainabiltyModule { }
