import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Form, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {BeachesInfoList} from '../../../_models/beaches.model';
import {BeachesService} from '../../../services/beaches.service';
import {takeUntil} from 'rxjs/operators';
import {NbDialogRef, NbWindowRef} from '@nebular/theme';
import {error} from 'protractor';

@Component({
  selector: 'ngx-beach-form',
  templateUrl: './beach-form.component.html',
  styleUrls: ['./beach-form.component.scss'],
})
export class BeachFormComponent implements OnInit {

  private destroyed = new Subject();
  editData: BeachesInfoList;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private BeachService: BeachesService,
              private windowRef: NbWindowRef<any>) {
  }

  errorMessages = {
    name: [
      {type: 'required', message: 'Το πεδίο δεν πρέπει να είναι κενό'},
      {type: 'pattern', message: 'Εισάγετε αλφαβητικούς χαρακτήρες'},
    ],
    category: [
      {type: 'required', message: 'Το πεδίο δεν πρέπει να είναι κενό'},
      {type: 'pattern', message: 'Εισάγετε αλφαβητικούς χαρακτήρες'},
    ],
    type_of_Beach: [
      {type: 'required', message: 'Το πεδίο δεν πρέπει να είναι κενό'},
      {type: 'pattern', message: 'Εισάγετε αλφαβητικούς χαρακτήρες'},
    ],
    thumbnail: [
      {type: 'required', message: 'Το πεδίο δεν πρέπει να είναι κενό'},
      {type: 'pattern', message: 'Εισάγετε αλφαβητικούς χαρακτήρες'},
    ],
  };

  ngOnInit(): void {
    console.log('test');
    this.initializeForm();
    if (this.editData) {
      this.form.patchValue({
        name: this.editData.name,
        category: this.editData.category,
        type_of_Beach: this.editData.type,
        thumbnail: this.editData.thumbnail,
      });
    } else {
      console.log("Fuck that did not work");
    }
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ ]*$')]],
      category: ['', [Validators.required, Validators.pattern('^[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ ]*$')]],
      type_of_Beach: ['', [Validators.required, Validators.pattern('^[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ ]*$')]],
      thumbnail: ['', [Validators.required, Validators.pattern('^[a-zA-Zα-ωΑ-Ωά-ώΆ-Ώ ]*$')]],
    });
  }

  closeWindow() {
    if (this.windowRef) {
      this.windowRef.close();
    }
  }

  submit() {
    if (this.editData) {
      this.BeachService.EditBeach(this.form.value, this.editData._id)
        .pipe(takeUntil(this.destroyed))
        .subscribe((res: any) => {
          this.form.reset();
          if (this.windowRef) {
            this.windowRef.close({data: res});
          }
        }, error => {
          if (this.windowRef) {
            this.windowRef.close();
          }
          this.form.reset();
        });
    } else {
      this.BeachService.createBeach(this.form.value)
        .pipe(takeUntil(this.destroyed))
        .subscribe((res: any) => {
          this.form.reset();
          if (this.windowRef) {
            this.windowRef.close({data: res});
          }
        }, error => {
          if (this.windowRef) {
            this.windowRef.close();
          }
          this.form.reset();
        });
    }
  }

}
