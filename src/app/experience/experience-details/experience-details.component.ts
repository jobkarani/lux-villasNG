import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/Interfaces/country';
import { Villa } from 'src/app/Interfaces/villa';
import { CountryService } from 'src/app/Services/country.service';
import { CountryVillasService } from 'src/app/Services/countryvillas.service';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css']
})
export class ExperienceDetailsComponent implements OnInit {
  singleCountry: Country[] = [];
  countryVilla: Villa[] = [];
  
  id: number =0;

  constructor(private countryService:CountryService, private countryVillas:CountryVillasService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.countryService.getCountryDetails(this.id).subscribe(
          datax =>{
            this.singleCountry = datax;
            console.log(this.singleCountry)
          })
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
