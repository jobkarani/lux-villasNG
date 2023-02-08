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
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  makeAnyDataGetRequest(fullUrl: string): Observable<any> {
    return this.http.get<any>(fullUrl);
  }

  makeDataPostRequest(fullUrl: string, data: any): Observable<any> {
    return this.http.post<any>(fullUrl, data);
  }

  public showToastMessage(
    alertType: AppEnums,
    alertTitle: string,
    alertMessage: string
  ) {
    switch (alertType) {
      case AppEnums.ToastTypeSuccess:
        return this.toastr.success(alertMessage, alertTitle);
        break;
      case AppEnums.ToastTypeInfo:
        return this.toastr.info(alertMessage, alertTitle);
        break;
      case AppEnums.ToastTypeWarning:
        return this.toastr.warning(alertMessage, alertTitle);
        break;
      case AppEnums.ToastTypeError:
        return this.toastr.error(alertMessage, alertTitle);
        break;
      default:
        break;
    }
  }
}
