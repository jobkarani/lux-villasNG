import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
        {path:"",component:SignupComponent},
        { path: 'login', component: LoginComponent },
        { path: 'create-profile', component: CreateProfileComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}