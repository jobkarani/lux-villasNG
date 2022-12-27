import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'villas',
    canActivate: [],
    loadChildren: ()=> import('./villas/villas.module').then((m)=>m.VillasModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}