import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  // container = document.getElementById("container");

  // toggle = () => {
  //   container.classList.toggle("sign-in");
  //   container.classList.toggle("sign-up");
  // };

  // setTimeout(() => {
  //   container.classList.add("sign-in");
  // }, 200);

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
  };

}
