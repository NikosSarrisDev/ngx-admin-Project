import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsumablesComponent} from './consumables.component';
import {ConsumablesRoutingModule} from './consumables-routing.module';
import {NbCardModule} from '@nebular/theme';


@NgModule({
  declarations: [
    ConsumablesComponent,
  ],
  imports: [
    CommonModule,
    ConsumablesRoutingModule,
    NbCardModule,
  ],
})
export class ConsumablesModule {
}
