import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Interfaces/country';
import { CountryService } from 'src/app/Services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit{

  singleCountry: Country[] = [];
  id: number =0;

  constructor(private countryService:CountryService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.countryService.getCountryDetails(this.id).subscribe(
          datax =>{
            this.singleCountry = datax;
            console.log(this.singleCountry)
          }
        )
      }
    );
  }
}
