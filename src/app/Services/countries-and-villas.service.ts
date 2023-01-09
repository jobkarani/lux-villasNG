import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesVillas } from '../Interfaces/countries-villas';

@Injectable({
  providedIn: 'root'
})
export class CountriesAndVillasService {

  constructor(private http: HttpClient) { }

  getCountriesAndVillas(): Observable<CountriesVillas[]> {
    return this.http.get<CountriesVillas[]>('https://luxury-villasbe.up.railway.app/villasAndCountries/');
  }
}
