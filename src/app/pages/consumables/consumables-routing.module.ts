import {NgModule, OnDestroy} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsumablesComponent} from './consumables.component';

export const routes: Routes = [
  {
    path: '',
    component: ConsumablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ConsumablesRoutingModule {
}

