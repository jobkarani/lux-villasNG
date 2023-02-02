import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Villa } from '../Interfaces/villa';

@Injectable({
  providedIn: 'root'
})
export class VillasService {

  id: number = 0;

  constructor(private http: HttpClient) {}

  getVillaDetails(id:number):Observable<Villa[]> {
    return this.http.get<Villa[]>('https://luxury-villasbe.up.railway.app/villaDetails/'+ id);
  }
}
