import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {};


  ngOnInit(): void {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menus");
    const navLink = document.querySelectorAll(".nav-links");
  
    const mobileMenu = () => {
      hamburger?.classList.toggle("active")
      navMenu?.classList.toggle("active")
    }
  
    const closeMenu = () => {
      hamburger?.classList.remove("active")
      navMenu?.classList.remove("active")
    }
  
    hamburger?.addEventListener("click" , mobileMenu)
    navLink.forEach((l) => l.addEventListener("click",closeMenu))
  }
  
}
