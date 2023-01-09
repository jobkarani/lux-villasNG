import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  login:any;

  constructor(private loginService: LoginService, private router: Router) {}
  
  ngOnInit(): void {
     this.login = {
        username: '',
        password: '',
      }
  };

  loginUser(){
    this.loginService.logUser(this.login).subscribe(data =>{
      // alert('User ' + this.login.username + ' has been logged!'),
      this.router.navigate(['/country']);
    },
    error => console.log('error',error)
    )
  };

}
