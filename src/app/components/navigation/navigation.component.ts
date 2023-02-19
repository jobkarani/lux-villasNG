import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor() {};

  menuVar: boolean = false;
  menu_icon_var: boolean = false;

  openMenu(){
    this.menuVar =! this.menuVar;
    this.menu_icon_var =! this.menu_icon_var;
  }
  
}
