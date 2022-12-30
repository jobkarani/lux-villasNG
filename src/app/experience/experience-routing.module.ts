import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceComponent } from './experience.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceComponent,
    children: [
        {path:"",component:ExperienceListComponent},
        // { path: 'about', component: AboutUsComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceRoutingModule {}