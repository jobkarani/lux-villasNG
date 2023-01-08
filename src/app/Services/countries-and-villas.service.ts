import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesAndVillasService {

  constructor(private http: HttpClient) { }

  getCountriesAndVillas(): Observable<any> {
    return this.http.get<any>('https://luxury-villasbe.up.railway.app/villasAndCountries/');
  }
}
