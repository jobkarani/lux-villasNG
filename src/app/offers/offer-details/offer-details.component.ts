import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/Interfaces/offer';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  singleOffer: Offer[] = [];

  id: number =0;

  constructor(private offerService: OfferService, private route:ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.offerService.getOfferDetails(this.id).subscribe(
          datax =>{
            this.singleOffer = datax;
            console.log(this.singleOffer)
          })
      });
  }

}
