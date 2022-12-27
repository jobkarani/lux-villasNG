import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillasListComponent } from './villas-list/villas-list.component';
import { VillasComponent } from './villas.component';

const routes: Routes = [
  {
    path: '',
    component: VillasComponent,
    children: [
        {path:"villa-list",component:VillasListComponent},
        // { path: 'about', component: AboutUsComponent },
    
      ],
  },

//   {
//     path: 'villa-detai',
//     component: VillasComponent,
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillasRoutingModule {}