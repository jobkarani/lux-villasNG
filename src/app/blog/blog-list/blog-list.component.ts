import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Interfaces/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit{

  blog:Blog[] = [];

  constructor(private http:HttpClient) {};

  ngOnInit(): void {
    this.http.get<Blog[]>('https://http://127.0.0.1:8000/blogs/').subscribe(data=>{
      this.blog = data;
      console.log(this.blog)
    })
  }
}
