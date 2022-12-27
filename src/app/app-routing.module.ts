import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'villas',
    canActivate: [],
    loadChildren: ()=> import('./villas/villas.module').then((m)=>m.VillasModule)
  },
  {
    path: 'offers',
    canActivate: [],
    loadChildren: ()=> import('./offers/offers.module').then((m)=>m.OffersModule)
  },
  {
    path: 'experience',
    canActivate: [],
    loadChildren: ()=> import('./experience/experience.module').then((m)=>m.ExperienceModule)
  },
  {
    path: 'dining',
    canActivate: [],
    loadChildren: ()=> import('./dining/dining.module').then((m)=>m.DiningModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}