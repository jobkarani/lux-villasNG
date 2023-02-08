import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
        {path:"blog-list",component:BlogListComponent},
        { path: 'blog-details/:id', component: BlogDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}