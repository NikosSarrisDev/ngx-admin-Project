import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {BeachesInfoList} from '../../../_models/beaches.model';
import {NbDialogService, NbWindowRef, NbWindowService} from '@nebular/theme';
import {BeachesService} from '../../../services/beaches.service';
import {ActivatedRoute} from '@angular/router';
import {BeachFormComponent} from "../beach-form/beach-form.component";
import {Subject} from "rxjs";
import {error} from "protractor";


// import { Beach } from 'nope';
@Component({
  selector: 'ngx-beaches-info',
  templateUrl: './beaches-info.component.html',
  styleUrls: ['./beaches-info.component.scss'],
})
export class BeachesInfoComponent implements OnInit {

  private destoyed = new Subject();
  windowRef: NbWindowRef<any>;
  confirmRef: NbWindowRef<any>;
  BeachList: BeachesInfoList[] = [];
  loading = false;

  constructor(private http: HttpClient,
              private httpServise: BeachesService,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.httpServise.fetchBeach().subscribe((resp: any) => {
      // console.log(resp.payload.data);
      this.BeachList = resp.payload.data;
      console.log(this.BeachList);
    });
  }

  // Make a Newform Funtion

  private EditBeatch() {
    // this.loading = true;
    this.httpServise.fetchBeach().subscribe((beaches) => {
      // this.allBeaches = beaches;
      // this.loading = false;
    });
  }

  onDeleteProduct(id: string) {
    this.httpServise.deleteBeach(id);
  }

  onDeleteAllProducts() {
    this.httpServise.deleteAllBeaches();
  }

}
