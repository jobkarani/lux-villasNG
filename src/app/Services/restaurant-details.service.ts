import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../Interfaces/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsService {

  constructor(private http: HttpClient) { }

  id: number = 0;

  getRestaurantDetails(id:number):Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('https://luxury-villasbe.up.railway.app/diningDetails/'+ id);
  }
}
