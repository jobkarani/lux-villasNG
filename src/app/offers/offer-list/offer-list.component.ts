import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Offer } from 'src/app/Interfaces/offer';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit{

  constructor(private meta: Meta, private http:HttpClient) {}

  offer: Offer[] = [];

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'Hakuna Matata Tours' }, 
      { name: 'keywords', content: 'Hakuna Matata Tours, Hakuna Matata, kenyan Hakuna Matata, Kenyan travel companies, Nairobi travel company, African travel company' } 
    ]);

      this.http.get<Offer[]>('https://luxury-villasbe.up.railway.app/offer/').subscribe(data =>{
        this.offer = data;
        console.log(this.offer);
      })
  }

}
