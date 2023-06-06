import {NgModule, OnDestroy} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeachesListComponent} from './beaches-list/beaches-list.component';
import {BeachFormComponent} from './beach-form/beach-form.component';
// import {BeachesInfoComponent} from "./beaches-info/beaches-info.component";

export const routes: Routes = [
  {
    path: 'beaches-list',
    component: BeachesListComponent,
  },
  {
    path: '',
    redirectTo: 'beaches-list',
    pathMatch: 'full',
  },
  // {
  //   path: 'beaches-info',
  //   component: BeachesInfoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BeachRoutingModule {
}

