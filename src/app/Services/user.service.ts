import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerNewUser(userData: any): Observable<any>{
    return this.http.post('https://luxury-villasbe.up.railway.app/auth/register/', userData)
  }
}
