import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BookingsComponent } from './bookings.component';
import { BookComponent } from './book/book.component';
import { BookingsRoutingModule } from './booking-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingReceiptComponent } from './booking-receipt/booking-receipt.component';

@NgModule({
  declarations: [
    BookingsComponent,
    BookComponent,
    BookingReceiptComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BookingsModule { }
