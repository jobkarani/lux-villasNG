import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillasListComponent } from './villas-list/villas-list.component';
import { VillasDetailsComponent } from './villas-details/villas-details.component';
import { VillasComponent } from './villas.component';
import { SharedModule } from '../shared/shared.module';
import { VillasRoutingModule } from './villas-routing.module';



@NgModule({
  declarations: [
    VillasComponent,
    VillasListComponent,
    VillasDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VillasRoutingModule,
  ]
})
export class VillasModule { }
