import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ], 
  exports:[
    BaseLayoutComponent,
    NavigationComponent,
  ]
})
export class SharedModule { }
