import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Villa } from 'src/app/Interfaces/villa';

@Component({
  selector: 'app-villas-list',
  templateUrl: './villas-list.component.html',
  styleUrls: ['./villas-list.component.css']
})
export class VillasListComponent implements OnInit {

  constructor(private meta: Meta, private http: HttpClient) {}

  villa: Villa[] = [];

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'Hakuna Matata Tours' }, 
      { name: 'keywords', content: 'Hakuna Matata Tours, Hakuna Matata, kenyan Hakuna Matata, Kenyan travel companies, Nairobi travel company, African travel company' } 
    ]);

    this.http.get<Villa[]>('https://luxury-villasbe.up.railway.app/villas/').subscribe(data =>{
      this.villa = data;
      console.log(data);
    })
  }
}