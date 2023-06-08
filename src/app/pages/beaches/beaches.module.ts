import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeachesListComponent} from './beaches-list/beaches-list.component';
import {BeachRoutingModule} from './beach-routing.module';
import {BeachFormComponent} from './beach-form/beach-form.component';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule, NbSearchModule,
  NbSpinnerModule,
  NbTooltipModule
} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BeachesInfoComponent} from './beaches-info/beaches-info.component';


@NgModule({
  declarations: [
    BeachesListComponent,
    BeachFormComponent,
    BeachesInfoComponent,
  ],
  imports: [
    CommonModule,
    BeachRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbSpinnerModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
    NbSearchModule,
    NbAutocompleteModule,
  ],
})
export class BeachesModule {
}
