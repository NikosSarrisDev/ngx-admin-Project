import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {ActivitiesInfoList} from "../../../_models/activities.model";
import {NbDialogService, NbWindowRef, NbWindowService} from '@nebular/theme';
// import {BeachesService} from '../../../services/beaches.service';
import {ActivitiesService} from '../../../services/activities.service';
import {ActivatedRoute} from '@angular/router';

import {ActivitiesFormComponent} from '../activities-form/activities-form.component';
import {Subject} from "rxjs";
import {error} from "protractor";


@Component({
  selector: 'ngx-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent implements OnInit {

  private destoyed = new Subject();
  windowRef: NbWindowRef<any>;
  confirmRef: NbWindowRef<any>;
  ActivityList: ActivitiesInfoList[] = [];
  loading = false;
  showText = false;

  constructor(private http: HttpClient,
              private ActivitiesServise: ActivitiesService,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.ActivitiesServise.fetchActivity().subscribe((resp: any) => {
      // console.log(resp.payload.data);
      this.ActivityList = resp.payload.data;
      console.log(this.ActivityList);
    });
  }

  newForm() {
    // this.windowRef = this.windowService.open(BeachFormComponent);
    const demoWindow = this.windowService.open(ActivitiesFormComponent);
    demoWindow.onClose.subscribe(resp => {
      console.log('test');
    })
    // this.windowRef.onClose.subscribe(response => {
    //   if (response) {
    //     this.httpServise.fetchBeach()
    //       .pipe(takeUntil(this.destoyed))
    //       .subscribe((resp: any) => {
    //         this.loading = false;
    //         console.log(resp);
    //       },
    //         error => {
    //         if (this.windowRef) {
    //           this.windowRef.close();
    //         }
    //         this.loading = false;
    //         });
    //   }
    // });
  }

  onActivityFetch() {
    this.ActivitiesServise.fetchActivity();
  }

  onActivityCreate(activities: any) {
    this.ActivitiesServise.createActivity(activities);
    console.log(activities);
  }

  private EditActivity() {
    // this.loading = true;
    this.ActivitiesServise.fetchActivity().subscribe((beaches) => {
      // this.allBeaches = beaches;
      // this.loading = false;
    });
  }

  onDeleteProduct(id: string) {
    this.ActivitiesServise.deleteActivity(id);
  }

  onDeleteAllProducts() {
    this.ActivitiesServise.deleteAllActivities();
  }


}
