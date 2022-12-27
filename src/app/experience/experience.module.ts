import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceListComponent,
    ExperienceDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExperienceRoutingModule,
  ]
})
export class ExperienceModule { }
