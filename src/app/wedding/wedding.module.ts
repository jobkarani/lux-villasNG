import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingListComponent } from './wedding-list/wedding-list.component';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { WeddingComponent } from './wedding.component';
import { SharedModule } from '../shared/shared.module';
import { WeddingRoutingModule } from './wedding-routing.module';



@NgModule({
  declarations: [
    WeddingComponent,
    WeddingListComponent,
    WeddingDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeddingRoutingModule,
  ]
})
export class WeddingModule { }
