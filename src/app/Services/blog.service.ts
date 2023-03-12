import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  id: number = 0;

  constructor(private http: HttpClient) {}

  getBlogDetails(id:number):Observable<Blog[]> {
    return this.http.get<Blog[]>('https://luxury-villasbe.up.railway.app/blogDetails/'+ id);
  }
}
