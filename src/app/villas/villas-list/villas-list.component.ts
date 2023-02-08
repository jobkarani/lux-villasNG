import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Villa } from 'src/app/Interfaces/villa';

@Component({
  selector: 'app-villas-list',
  templateUrl: './villas-list.component.html',
  styleUrls: ['./villas-list.component.css']
})
export class VillasListComponent implements OnInit {

  constructor(private http: HttpClient) {}

  villa: Villa[] = [];

  ngOnInit(): void {
    this.http.get<Villa[]>('https://luxury-villasbe.up.railway.app/villas/').subscribe(data =>{
      this.villa = data;
      console.log(data);
    })
  }
}