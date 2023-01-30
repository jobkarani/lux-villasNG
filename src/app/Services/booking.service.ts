import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Interfaces/booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private http: HttpClient) { }

  createBooking(booking: Booking) {
    return this.http.post('https://luxury-villasbe.up.railway.app/bookings/', booking);
  }

}
