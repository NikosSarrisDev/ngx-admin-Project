import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesFormComponent} from './activities-form/activities-form.component';
import {ActivityRoutingModule} from './activity-routing.module';
import {ActivitiesListComponent} from './activities-list/activities-list.component';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  NbTooltipModule,
} from "@nebular/theme";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ActivitiesFormComponent,
    ActivitiesListComponent,
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbSpinnerModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbTooltipModule,
  ],
})
export class ActivitiesModule {
}
