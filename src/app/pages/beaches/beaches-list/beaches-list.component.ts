import {Component, OnInit, OnDestroy, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {BeachesInfoList} from '../../../_models/beaches.model';
import {NbDialogService, NbWindowRef, NbWindowService} from '@nebular/theme';
import {BeachesService} from '../../../services/beaches.service';
import {ActivatedRoute} from '@angular/router';
import {BeachFormComponent} from '../beach-form/beach-form.component';
import {Subject} from 'rxjs';
// import {error} from "protractor";


// import { Beach } from 'nope';
@Component({
  selector: 'ngx-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.scss'],
})
export class BeachesListComponent implements OnInit, OnDestroy {

  private destoyed = new Subject();
  windowRef: NbWindowRef<any>;
  confirmRef: NbWindowRef<any>;
  BeachList: BeachesInfoList[] = [];
  loading = false;
  showText = false;

  constructor(private http: HttpClient,
              private httpServise: BeachesService,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.httpServise.fetchBeach().subscribe((resp: any) => {
      // console.log(resp.payload.data);
      this.BeachList = resp.payload.data;
      this.loading = false;
      console.log(this.BeachList);
    });
  }

  DetainedBeach(beach: BeachesInfoList) {

  }

  // Make a Newform Funtion
  newForm() {
    this.windowRef = this.windowService.open(BeachFormComponent);
    this.windowRef.onClose.subscribe(response => {
      if (response) {
        this.loading = true;
        this.httpServise.fetchBeach()
          .pipe(takeUntil(this.destoyed))
          .subscribe((resp: any) => {
            // this.vaccineList = resp.payload.data;
            // this.vaccineList = this.sharedService.sortDeleted(resp.payload.data);
            this.loading = false;
          }, error => {
            if (this.windowRef) {
              this.windowRef.close();
            }
            // this.sharedService.showToast('danger', 'Σφάλμα', error.error.message || error.message);
            this.loading = false;
          });
      }
    });
  }

  confirmDialog(window: TemplateRef<any>, beach: BeachesInfoList) {
    this.confirmRef = this.windowService.open(
      window,
      {
        context: {
          title: ' Θέλετε σίγουρα να διαγράψετε αυτή τη παραλία ' + beach.name,
          beach: beach,
          vaccineName: beach.name,
        },
        // autoFocus: false,
      });
  }

  editForm(beach: BeachesInfoList, index) {
    const editWindow = this.windowService.open(BeachFormComponent, {
      context: {
        editData: beach,
      },
    });
    editWindow.onClose.subscribe(resposne => {
      if (resposne) {
        this.loading = true;
        this.httpServise.fetchBeach()
          .pipe(takeUntil(this.destoyed))
          .subscribe((resp: any) => {
            // this.vaccineList = resp.payload.data;
            // this.BeachList = this.sharedService.sortDeleted(resp.payload.data);
            this.loading = false;
          }, error => {
            if (this.windowRef) {
              this.windowRef.close();
            }
            // this.sharedService.showToast('danger', 'Σφάλμα', error.error.message || error.message);
            this.loading = false;
          });
      }
    });
  }

  beachDelete(beach: BeachesInfoList) {
    this.loading = true;
    this.httpServise.deleteBeach(beach._id)
      .pipe(takeUntil(this.destoyed))
      .subscribe((response: any) => {
        const index = this.BeachList.indexOf(beach);
        this.BeachList[index].delete = true;
        // this.vaccineList = this.sharedService.sortDeleted(this.BeachList);
        // this.sharedService.showToast('primary', 'Ενημέρωση', response.payload.message);
        this.loading = false;
        if (this.confirmRef) {
          this.confirmRef.close();
        }
      }, error => {
        if (this.confirmRef) {
          this.confirmRef.close();
        }
        // this.sharedService.showToast('danger', 'Σφάλμα', error.error.message || error.message);
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.destoyed.next();
    this.destoyed.complete();
  }

  // onBeachFetch() {
  //   this.httpServise.fetchBeach();
  // }

  // onBeachCreate(beaches: any) {
  //   this.httpServise.createBeach(beaches);
  //   console.log(beaches);
  // }
  //
  // private EditBeatch() {
  //   // this.loading = true;
  //   this.httpServise.fetchBeach().subscribe((beaches) => {
  //     // this.allBeaches = beaches;
  //     // this.loading = false;
  //   });
  // }
  //
  // onDeleteProduct(id: string) {
  //   this.httpServise.deleteBeach(id);
  // }
  //
  // onDeleteAllProducts() {
  //   this.httpServise.deleteAllBeaches();
  // }

}
