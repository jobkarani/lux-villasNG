import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logUser(userData: any): Observable<any>{
    return this.http.post('https://luxury-villasbe.up.railway.app/auth/login/', userData)
  }
}
