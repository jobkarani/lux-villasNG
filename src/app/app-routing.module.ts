import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'country', pathMatch: 'full' },

  {
    path: 'auth',
    canActivate: [],
    loadChildren: ()=> import('./auth/auth.module').then((m)=>m.AuthModule)
  },
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
  },
  {
    path: 'country',
    canActivate: [],
    loadChildren: ()=> import('./country/country.module').then((m)=>m.CountryModule)
  },
  {
    path: 'contact',
    canActivate: [],
    loadChildren: ()=> import('./sustainabilty/sustainabilty.module').then((m)=>m.SustainabiltyModule)
  },
  {
    path: 'blog',
    canActivate: [],
    loadChildren: ()=> import('./blog/blog.module').then((m)=>m.BlogModule)
  },
  {
    path: 'booking',
    canActivate: [],
    loadChildren: ()=> import('./bookings/bookings.module').then((m)=>m.BookingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}