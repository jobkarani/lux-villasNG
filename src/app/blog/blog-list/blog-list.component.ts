import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Blog } from 'src/app/Interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{

  blog:Blog[] = [];

  constructor(private meta: Meta, private http:HttpClient) {};

  ngOnInit(): void {
    this.meta.addTags([ 
      { name: 'description', content: 'Hakuna Matata Tours' }, 
      { name: 'keywords', content: 'Hakuna Matata Tours, Hakuna Matata, kenyan Hakuna Matata, Kenyan travel companies, Nairobi travel company, African travel company' } 
    ]);

    this.http.get<Blog[]>('https://luxury-villasbe.up.railway.app/blogs/').subscribe(data=>{
      this.blog = data;
      console.log(this.blog)
    })
  }
}
