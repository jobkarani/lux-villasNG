import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Villa } from 'src/app/Interfaces/villa';
import { VillasService } from 'src/app/Services/villas.service';

@Component({
  selector: 'app-villas-details',
  templateUrl: './villas-details.component.html',
  styleUrls: ['./villas-details.component.css']
})
export class VillasDetailsComponent implements OnInit {

  singleVilla : Villa[] = []; 
  id: number = 0;

  constructor(private villaService: VillasService, private route:ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.villaService.getVillaDetails(this.id).subscribe(
          datax =>{
            this.singleVilla = datax;
            console.log(this.singleVilla)
          })
      });
  }

}
