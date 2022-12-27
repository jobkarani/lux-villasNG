import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
