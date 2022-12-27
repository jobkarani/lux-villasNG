import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SustainabilityListComponent } from './sustainability-list/sustainability-list.component';
import { SustainabilityComponent } from './sustainability.component';

const routes: Routes = [
  {
    path: '',
    component: SustainabilityComponent,
    children: [
        {path:"sustainability-list",component:SustainabilityListComponent},
        // { path: 'about', component: AboutUsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SustainabilityRoutingModule {}