import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ], 
  exports:[
    BaseLayoutComponent,
    NavigationComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
