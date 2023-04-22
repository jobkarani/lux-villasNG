import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppEnums } from 'src/app/enums/app';
import { Booking } from 'src/app/Interfaces/booking';
import { Villa } from 'src/app/Interfaces/villa';
import { MainService } from 'src/app/Services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  villas: Villa[] = [];
  bookingFormGroup: FormGroup;

  constructor(
    private meta: Meta,
    private router: Router,
    private _formBuilder: FormBuilder,
    private mainService: MainService
  ) {
    this.bookingFormGroup = _formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      special_requests: [''],
      villa: ['', Validators.required],
      guestsnumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'Hakuna Matata Tours' }, 
      { name: 'keywords', content: 'Hakuna Matata Tours, Hakuna Matata, kenyan Hakuna Matata, Kenyan travel companies, Nairobi travel company, African travel company' } 
    ]);

    this.getVillaNames();
  }

  getVillaNames() {
    this.mainService
      .makeAnyDataGetRequest(`${environment.MAIN_URL}/villas/`)
      .subscribe(
        (data) => {
          this.villas = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    if (!this.bookingFormGroup.valid) {
      const controls = this.bookingFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.mainService.showSnackBarMessage(`Missing Field ${name}`)
        }
      }
      return;
    }
    let capturedData: Booking = this.bookingFormGroup.value;
    capturedData.villa = Number(capturedData.villa);

    this.mainService
      .makeDataPostRequest(`${environment.MAIN_URL}/bookings/`, capturedData)
      .subscribe(
        (data) => {
          this.mainService.showSnackBarMessage("success"),
          
          this.router.navigate(['/booking/thankyoupage']);
        },
        (error) => {
          this.mainService.showSnackBarMessage(error)
        }
      );
  }
} 
