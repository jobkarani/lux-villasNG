import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppEnums } from '../enums/app';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  makeAnyDataGetRequest(fullUrl: string): Observable<any> {
    return this.http.get<any>(fullUrl);
  }

  makeDataPostRequest(fullUrl: string, data: any): Observable<any> {
    return this.http.post<any>(fullUrl, data);
  }

  createProfile(profileData: any) {
    return this.http.post('https://luxury-villasbe.up.railway.app/createProfile', profileData);
  }

  showSnackBarMessage(message: string) {
    this._snackBar.open(message, undefined, {
      duration: 3000,
      panelClass: ['blue-snackbar'],
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
