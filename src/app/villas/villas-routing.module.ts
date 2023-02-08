import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillasListComponent } from './villas-list/villas-list.component';
import { VillasComponent } from './villas.component';

const routes: Routes = [
  {
    path: '',
    component: VillasComponent,
    children: [
        {path:"",component:VillasListComponent},
        // { path: 'about', component: AboutUsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillasRoutingModule {}