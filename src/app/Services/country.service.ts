import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  id: number = 0;

  constructor(private http: HttpClient) { }  

  getCountryDetails(id: number): Observable<Country[]>{
    return this.http.get<Country[]>('https://luxury-villasbe.up.railway.app/countryDetails/' + id);
  }

}