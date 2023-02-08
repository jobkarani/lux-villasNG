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

    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 6000); 
    }
  }

}
