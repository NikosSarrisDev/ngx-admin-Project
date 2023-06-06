import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardHomeComponent} from './dashboard-home.component';
import {DashboardHomePageRouting} from './dashboard-home-page-routing';
import {NbButtonModule} from "@nebular/theme";


@NgModule({
  declarations: [
    DashboardHomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardHomePageRouting,
    NbButtonModule,
  ],
})
export class DashboardHomePageModule {
}
