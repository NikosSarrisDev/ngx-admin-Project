import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './auth/_services/auth-guard.service';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
// import {LoginComponent} from './auth/login/login.component';
// import {RegisterComponent} from "./auth/register/register.component";

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'auth2',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.NgxAuthModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      // {
      //   path : 'auth2',
      //   component: LoginComponent,
      //   children: [
      //     {
      //       path: 'login',
      //       component: LoginComponent,
      //     },
      //     {
      //       path: 'register',
      //       component: RegisterComponent,
      //     },
      //     ],
      // },
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
