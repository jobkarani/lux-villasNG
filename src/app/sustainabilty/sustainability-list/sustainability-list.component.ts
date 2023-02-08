import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sustainability-list',
  templateUrl: './sustainability-list.component.html',
  styleUrls: ['./sustainability-list.component.css']
})
export class SustainabilityListComponent implements OnInit {


  ngOnInit(): void {

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    function switchTheme(e:any) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }    
    }

    toggleSwitch!.addEventListener('change', switchTheme, false);


    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const contactForm = document.getElementById('contact-form');
    const errorElement = document.getElementById('error');
    const successMsg = document.getElementById('success-msg');
    const submitBtn = document.getElementById('submit');
      
    const validate = (e:any) => {
      e.preventDefault();
      errorElement!.innerHTML = '';
      successMsg!.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 
      return true;
    }
    submitBtn!.addEventListener('click', validate);
  }
}
