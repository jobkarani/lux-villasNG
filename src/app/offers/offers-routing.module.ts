import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OffersComponent } from './offers.component';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    children: [
        {path:"",component:OfferListComponent},
        { path: 'offer-details/:id', component:  OfferDetailsComponent},
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}