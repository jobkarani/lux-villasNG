import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingListComponent } from './wedding-list/wedding-list.component';
import { WeddingComponent } from './wedding.component';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    children: [
        {path:"wedding-list",component:WeddingListComponent},
        // { path: 'about', component: AboutUsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingRoutingModule {}