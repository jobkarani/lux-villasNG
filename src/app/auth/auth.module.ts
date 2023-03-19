import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';



@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    CreateProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
