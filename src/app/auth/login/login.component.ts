import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  login:any;

  constructor(private loginService: LoginService) {}
  
  ngOnInit(): void {
     this.login = {
        username: '',
        password: '',
      }
  };

  loginUser(){
    this.loginService.logUser(this.login).subscribe(data =>{
      alert('User ' + this.login.username + ' has been logged!')
    },
    error => console.log('error',error)
    )
  }

}
