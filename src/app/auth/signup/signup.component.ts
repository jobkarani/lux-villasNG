import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  register:any;

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
     this.register = {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password2: '',
      }
  };

  registerUser(){
    
  }

}
