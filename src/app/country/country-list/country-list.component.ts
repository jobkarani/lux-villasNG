import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Interfaces/country';
import { Villa } from 'src/app/Interfaces/villa';
import { TitleCasePipePipe } from 'src/app/Pipes/title-case-pipe.pipe';
import { CountryVillasService } from 'src/app/Services/countryvillas.service';
import { HomepagecountriesService } from 'src/app/Services/homepagecountries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})


export class CountryListComponent implements OnInit{
  
  constructor(private homepagecountriesService: HomepagecountriesService,  private countryVillas:CountryVillasService, private route:ActivatedRoute) { }

  country: Country[] = [];
  countryVilla: Villa[] = [];
  id: number =0;

 ngOnInit(){
  this.homepagecountriesService.getHomeCountries().subscribe(countries => {
    this.country = countries;
  });

  this.route.params.subscribe(
    data =>{
      this.id = data['id'];
      console.log(this.id);
      this.countryVillas.getCountryVillas(this.id).subscribe(
        datax =>{
          this.countryVilla = datax;
          console.log(this.countryVilla)
        })
    });
  }
}
