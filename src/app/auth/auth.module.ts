import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {NgxAuthRoutingModule} from './auth-routing.module';
// import {NgxAuthRoutingModule} from './auth-routing.module';
import {NbAuthModule} from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  // NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import {NgxLoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';

// export const routes: Routes = [
//   // .. here goes our components routes1
//
//
// ];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    // NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
})
export class NgxAuthModule {
}
