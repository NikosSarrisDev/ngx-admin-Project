import {Component, OnInit, OnDestroy, TemplateRef, ViewChild, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {BeachesInfoList} from '../../../_models/beaches.model';
import {NbWindowRef, NbWindowService} from '@nebular/theme';
import {BeachesService} from '../../../services/beaches.service';
import {BeachFormComponent} from '../beach-form/beach-form.component';
import {Observable, Subject} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import {error} from "protractor";


// import { Beach } from 'nope';
@Component({
  selector: 'ngx-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.scss'],
})
export class BeachesListComponent implements OnInit, OnDestroy {

  categoryFilters = [
    {name: 'category', value: 'organised', title: 'Organised'},
    {name: 'category', value: 'discover', title: 'To Discover'},
    {name: 'category', value: 'boat', title: 'By Boat'}];

  typeFilters = [
    {name: 'type', value: 'sand', title: 'Sand'},
    {name: 'type', value: 'shingle', title: 'Pebble'}];

  private destoyed = new Subject();
  searchQuery: string = '';
  windowRef: NbWindowRef<any>;
  confirmRef: NbWindowRef<any>;
  BeachList: BeachesInfoList[] = [];
  loading = false;
  showText = false;
  filtersForm: FormGroup;
  filteredControlOptions: Observable<any>;
  myControl = new FormControl;


  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private httpServise: BeachesService,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.initializeFilterForm();
    this.httpServise.fetchBeach('', '').subscribe((resp: any) => {
      // console.log(resp.payload.data);
      this.BeachList = resp.payload.data;
      this.loading = false;
    });
    this.filteredControlOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
  }


  DetainedBeach(beach: BeachesInfoList) {

  }

  initializeFilterForm() {
    this.filtersForm = this.fb.group({
      category: [],
      type: [],
    });
  }

  _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.httpServise.fetchBeach('', '')
      .pipe(takeUntil(this.destoyed))
      .subscribe((res: any) => {
        this.BeachList = res.payload.data.name.filter(option => option.toLowerCase().includes(filterValue));
      });
    // return this.BeachList.filter(option => option.toLowerCase().includes(filterValue));
  }

  search(): void {
    // console.log('Search', this.searchQuery);
  }


  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  ApplyWindow() {
    this.windowRef = this.windowService.open(
      this.contentTemplate,
      {title: 'Filter By', context: {text: 'some text to pass into template'}},
    );
  }
  submitFilters() {
    const data = this.filtersForm.value;
    this.httpServise.fetchBeach(data.category, data.type)
      .pipe(takeUntil(this.destoyed))
      .subscribe((res: any) => {
        // this.filtersForm.reset();
        if (this.windowRef) {
          this.windowRef.close();
        }
        this.BeachList = res.payload.data;
      });

  }

  reset_Filter() {
    this.filtersForm.reset();
    this.httpServise.fetchBeach('', '')
      .pipe(takeUntil(this.destoyed))
      .subscribe((res: any) => {
        this.BeachList = res.payload.data;
      });
  }

  // beachDelete(beach: BeachesInfoList) {
  //   this.loading = true;
  //   this.httpServise.deleteBeach(beach._id)
  //     .pipe(takeUntil(this.destoyed))
  //     .subscribe((response: any) => {
  //       const index = this.BeachList.indexOf(beach);
  //       this.BeachList[index].delete = true;
  //       // this.vaccineList = this.sharedService.sortDeleted(this.BeachList);
  //       // this.sharedService.showToast('primary', 'Ενημέρωση', response.payload.message);
  //       this.loading = false;
  //       if (this.confirmRef) {
  //         this.confirmRef.close();
  //       }
  //     }, error => {
  //       if (this.confirmRef) {
  //         this.confirmRef.close();
  //       }
  //       // this.sharedService.showToast('danger', 'Σφάλμα', error.error.message || error.message);
  //       this.loading = false;
  //     });
  ngOnDestroy(): void {
    this.destoyed.next();
    this.destoyed.complete();
  }


}
