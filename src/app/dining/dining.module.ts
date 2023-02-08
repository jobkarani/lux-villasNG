import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiningListComponent } from './dining-list/dining-list.component';
import { DiningDetailsComponent } from './dining-details/dining-details.component';
import { DiningComponent } from './dining.component';
import { SharedModule } from '../shared/shared.module';
import { DiningRoutingModule } from './dining-routing.module';



@NgModule({
  declarations: [
    DiningComponent,
    DiningListComponent,
    DiningDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiningRoutingModule,
  ]
})
export class DiningModule { }
