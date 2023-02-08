import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillasDetailsComponent } from './villas-details/villas-details.component';
import { VillasListComponent } from './villas-list/villas-list.component';
import { VillasComponent } from './villas.component';

const routes: Routes = [
  {
    path: '',
    component: VillasComponent,
    children: [
        {path:"",component:VillasListComponent},
        { path: 'villa-details/:id', component: VillasDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillasRoutingModule {}