import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/Interfaces/profile.model';
import { ProfileService } from 'src/app/Services/profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  profile: Profile[] = [];
  profileFormGroup: FormGroup;

  constructor(
      private router: Router,
      private _formBuilder: FormBuilder,
      private profileService: ProfileService
    ) {
    this.profileFormGroup = _formBuilder.group({
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
          this.profileService.showSnackBarMessage(`Missing Field ${name}`)
        }
      }
      return;
    }

    let capturedData: Profile = this.profileFormGroup.value;

    this.profileService
      .makeDataPostRequest(`${environment.MAIN_URL}/createProfile/`, capturedData)
      .subscribe(
        (data) => {
          this.profileService.showSnackBarMessage("success"),
          
          this.router.navigate(['/home']);
        },
        (error) => {
          this.profileService.showSnackBarMessage(error)
        }
      );
  }
}
