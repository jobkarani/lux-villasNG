import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../Interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  id: number = 0;

  constructor(private http: HttpClient) {}

  getOfferDetails(id:number):Observable<Offer[]> {
    return this.http.get<Offer[]>('https://luxury-villasbe.up.railway.app/offerDetails/'+ id);
  }
}
