import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
  this.myForm = new FormGroup({
    username : new FormControl(''),
    password: new FormControl('')
  });
  }
}
