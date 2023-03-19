import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Profile } from '../Interfaces/profile.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
      private http: HttpClient,
      private router: Router,
      private _snackBar: MatSnackBar
    ) { }

    makeAnyDataGetRequest(fullUrl: string): Observable<any> {
      return this.http.get<any>(fullUrl);
    }

    makeDataPostRequest(fullUrl: string, data: any): Observable<any> {
      return this.http.post<any>(fullUrl, data);
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
