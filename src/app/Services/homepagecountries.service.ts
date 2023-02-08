import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Country } from '../Interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class HomepagecountriesService {

  constructor(private http: HttpClient) {}

  getHomeCountries() {
    return this.http.get<Country[]>('https://luxury-villasbe.up.railway.app/country/').pipe(
      map(countries => countries.slice(0, 4))
    );
  }
}
