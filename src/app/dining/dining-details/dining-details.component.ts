import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/Interfaces/restaurant';
import { RestaurantDetailsService } from 'src/app/Services/restaurant-details.service';

@Component({
  selector: 'app-dining-details',
  templateUrl: './dining-details.component.html',
  styleUrls: ['./dining-details.component.css']
})
export class DiningDetailsComponent implements OnInit {

  id: number = 0;
  
  singleRestaurant: Restaurant[] = [];

  constructor(private restaurantDetailsService:RestaurantDetailsService , private route:ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.restaurantDetailsService.getRestaurantDetails(this.id).subscribe(
          datax =>{
            this.singleRestaurant = datax;
            console.log(this.singleRestaurant)
          })
      });
  }

}
