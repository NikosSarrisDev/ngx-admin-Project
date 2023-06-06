import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxLoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NbAuthComponent} from '@nebular/auth';
import * as path from 'path';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
