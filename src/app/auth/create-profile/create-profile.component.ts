import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Interfaces/profile.model';
import { Register } from 'src/app/Interfaces/register';
import { MainService } from 'src/app/Services/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  profile: Profile[] = [];
  register: Register[] = [];
  profileFormGroup: FormGroup;

  constructor(
      private router: Router,
      private _formBuilder: FormBuilder,
      private mainService : MainService
    ) {
    this.profileFormGroup = _formBuilder.group({
      user: [this.register[1], Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });
   }

   onSubmit() {
    if (!this.profileFormGroup.valid) {
      const controls = this.profileFormGroup.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          this.mainService.showSnackBarMessage(`Missing Field ${name}`)
        }
      }
      return;
    }

    let capturedData: Profile = this.profileFormGroup.value;

    this.mainService
      .makeDataPostRequest(`${environment.MAIN_URL}/createProfile/`, capturedData)
      .subscribe(
        (data) => {
          this.mainService.showSnackBarMessage("success"),
          
          this.router.navigate(['/home']);
        },
        (error) => {
          this.mainService.showSnackBarMessage(error)
        }
      );
  }
}
