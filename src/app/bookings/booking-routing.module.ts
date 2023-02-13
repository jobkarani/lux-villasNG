import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookingReceiptComponent } from './booking-receipt/booking-receipt.component';
import { BookingsComponent } from './bookings.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent,
    children: [
        {path:"",component:BookComponent},
        { path: 'thankyoupage', component: BookingReceiptComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsRoutingModule {}