import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Restaurant } from 'src/app/Interfaces/restaurant';

@Component({
  selector: 'app-dining-list',
  templateUrl: './dining-list.component.html',
  styleUrls: ['./dining-list.component.css']
})
export class DiningListComponent implements OnInit{

  constructor(private meta: Meta, private http:HttpClient) {}

  restaurant: Restaurant[] = [];

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'Hakuna Matata Tours' }, 
      { name: 'keywords', content: 'Hakuna Matata Tours, Hakuna Matata, kenyan Hakuna Matata, Kenyan travel companies, Nairobi travel company, African travel company' } 
    ]);

    this.http.get<Restaurant[]>('https://luxury-villasbe.up.railway.app/dining/').subscribe(data =>{
      this.restaurant = data;
      console.log(data);
    })
  }

}
