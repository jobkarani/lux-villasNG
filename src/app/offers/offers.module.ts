import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { SharedModule } from '../shared/shared.module';
import { OffersRoutingModule } from './offers-routing.module';



@NgModule({
  declarations: [
    OffersComponent,
    OfferListComponent,
    OfferDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OffersRoutingModule,
  ]
})
export class OffersModule { }
