import {NgModule, OnDestroy} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {BeachesListComponent} from './beaches-list/beaches-list.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';
// import {BeachFormComponent} from './beach-form/beach-form.component';
import {ActivitiesFormComponent} from './activities-form/activities-form.component';
// import {BeachesInfoComponent} from "./beaches-info/beaches-info.component";


export const routes: Routes = [
  {
    path: 'activities-list',
    component: ActivitiesListComponent,
  },
  {
    path: '',
    redirectTo: 'beaches-list',
    pathMatch: 'full',
  },
  // {
  //   path: 'beaches-form',
  //   component: ActivitiesFormComponent,
  //   // path: 'beaches-list',
  //   // component: BeachesListComponent,
  // },
  // {
  //   path: 'beaches-info',
  //   component: BeachesInfoComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ActivityRoutingModule {
}

