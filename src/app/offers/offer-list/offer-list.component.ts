import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/Interfaces/offer';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit{

  constructor(private http:HttpClient) {}

  offer: Offer[] = [];

  ngOnInit(): void {
      this.http.get<Offer[]>('https://luxury-villasbe.up.railway.app/offer/').subscribe(data =>{
        this.offer = data;
        console.log(this.offer);
      })
  }

}
