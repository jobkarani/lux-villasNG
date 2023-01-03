import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningDetailsComponent } from './dining-details/dining-details.component';
import { DiningListComponent } from './dining-list/dining-list.component';
import { DiningComponent } from './dining.component';

const routes: Routes = [
  {
    path: '',
    component: DiningComponent,
    children: [
        {path:"",component:DiningListComponent},
        { path: 'dining-details/:id', component: DiningDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiningRoutingModule {}