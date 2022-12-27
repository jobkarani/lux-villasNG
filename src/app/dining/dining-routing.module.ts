import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningListComponent } from './dining-list/dining-list.component';
import { DiningComponent } from './dining.component';

const routes: Routes = [
  {
    path: '',
    component: DiningComponent,
    children: [
        {path:"dining-list",component:DiningListComponent},
        // { path: 'about', component: AboutUsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiningRoutingModule {}