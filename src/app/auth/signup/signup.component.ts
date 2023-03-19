import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  register:any;

  constructor(private userService: UserService, private router : Router) {}
  
  ngOnInit(): void {
     this.register = {
        username: '',
        email: '',
        password: '',
      }
  };

  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(data =>{
      // alert('User ' + this.register.username + ' has been created!')
      this.router.navigate(['/auth/create-profile']);
    }
    )
  }

}
