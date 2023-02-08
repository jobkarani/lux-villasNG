import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Interfaces/blog';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit{
  singleBlog: Blog[] = [];

  id: number =0;

  constructor(private blogService: BlogService, private route:ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(
      data =>{
        this.id = data['id'];
        console.log(this.id);
        this.blogService.getBlogDetails(this.id).subscribe(
          datax =>{
            this.singleBlog = datax;
            console.log(this.singleBlog)
          })
      });
  }
}
