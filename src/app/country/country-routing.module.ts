import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    children: [
        {path:"",component:CountryListComponent},
        { path: 'country-details/:id', component: CountryDetailsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}