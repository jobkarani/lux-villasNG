import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Booking } from 'src/app/Interfaces/booking';
import { Villa } from 'src/app/Interfaces/villa';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  villa: Villa[] = [];

  booking : Booking = {
    start_date: new Date(), 
    end_date: new Date(), 
    guestsnumber: 0, 
    special_requests: '', 
    villa: '', 
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
  };
 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get<Villa[]>('https://luxury-villasbe.up.railway.app/villas/').subscribe(data =>{
        this.villa = data;
        console.log(data);
      })
  }

  onSubmit() {
    this.http.post<Booking>('https://luxury-villasbe.up.railway.app/bookings/', this.booking).subscribe(
            response => console.log(response),
        );
  }
}
