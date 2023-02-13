import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesVillas } from 'src/app/Interfaces/countries-villas';
import { Country } from 'src/app/Interfaces/country';
import { CountriesAndVillasService } from 'src/app/Services/countries-and-villas.service';
import { HomepagecountriesService } from 'src/app/Services/homepagecountries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})


export class CountryListComponent implements OnInit{
  
  constructor(private homepagecountriesService: HomepagecountriesService,  private countriesAndVillasService:CountriesAndVillasService, private route:ActivatedRoute) { }

  country: Country[] = [];
  countriesVillas: CountriesVillas[] = [];
  id: number =0;

  ngOnInit(){

  this.homepagecountriesService.getHomeCountries().subscribe(countries => {
    this.country = countries;
  });

  this.route.params.subscribe(
    data =>{
      this.id = data['id'];
      console.log(this.id);
      this.countriesAndVillasService.getCountriesAndVillas().subscribe(
        datax =>{
          this.countriesVillas = datax;
          console.log(this.countriesVillas)
        })
    });
  }
}
