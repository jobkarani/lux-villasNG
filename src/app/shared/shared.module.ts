import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from '../components/base-layout/base-layout.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { LoginConditionComponent } from '../components/login-condition/login-condition.component';


@NgModule({
    declarations: [
        BaseLayoutComponent,
        NavigationComponent,
        FooterComponent,
        LoginConditionComponent
    ],
    exports: [
        BaseLayoutComponent,
        NavigationComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class SharedModule { }
