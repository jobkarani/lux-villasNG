import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Interfaces/country';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  constructor(private http: HttpClient) {}

  country: Country[] = [];

  ngOnInit(): void {
      this.http.get<Country[]>('https://luxury-villasbe.up.railway.app/country/').subscribe(data =>{
        this.country = data;
        console.log(data);
      })
  }

}
