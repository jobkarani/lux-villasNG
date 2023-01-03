import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/Interfaces/restaurant';

@Component({
  selector: 'app-dining-list',
  templateUrl: './dining-list.component.html',
  styleUrls: ['./dining-list.component.css']
})
export class DiningListComponent implements OnInit{

  constructor(private http:HttpClient) {}

  restaurant: Restaurant[] = [];

  ngOnInit(): void {
    this.http.get<Restaurant[]>('https://luxury-villasbe.up.railway.app/dining/').subscribe(data =>{
      this.restaurant = data;
      console.log(data);
    })
  }

}
