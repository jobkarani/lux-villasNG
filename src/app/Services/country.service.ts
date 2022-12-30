import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../Interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

}