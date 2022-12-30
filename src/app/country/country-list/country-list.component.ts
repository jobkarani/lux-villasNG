import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Interfaces/country';
import { TitleCasePipePipe } from 'src/app/Pipes/title-case-pipe.pipe';
import { HomepagecountriesService } from 'src/app/Services/homepagecountries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})


export class CountryListComponent implements OnInit{
  
  constructor(private homepagecountriesService: HomepagecountriesService) { }

  country: Country[] = [];

 ngOnInit(){
  this.homepagecountriesService.getHomeCountries().subscribe(countries => {
    this.country = countries;
  });
  }
}
