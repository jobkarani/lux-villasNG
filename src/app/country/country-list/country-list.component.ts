import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Interfaces/country';
import { TitleCasePipePipe } from 'src/app/Pipes/title-case-pipe.pipe';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})


export class CountryListComponent implements OnInit{
  
  constructor(private http: HttpClient) { }

  country: Country[] = [];

 ngOnInit(){
    this.http.get<Country[]>("https://luxury-villasbe.up.railway.app/country/").subscribe(data =>{
      this.country = data;
      console.log(data);
    })
  }
}
