import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
// import { BeachesListRequest } from '../_models/beaches.model';
import {ActivitiesListRequest} from '../_models/activities.model';
// import { Beach } from 'nope';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {

  constructor(private http: HttpClient) {
  }

  createActivity(data: ActivitiesListRequest): Observable<any> {
    return this.http.post<any>(environment.IP + 'activity/?category=&type=', data);
  }

  // Get All Beaches
  fetchActivity() {
    return this.http.get<any>(environment.IP + 'activity/?category=&type=')
      .pipe(map((res: ActivitiesListRequest) => res));
  }

  EditActivity(data: ActivitiesListRequest, id: string) {
    return this.http.patch<any>(environment.IP + id, data);
  }

  deleteActivity(id: string) {
    this.http.delete(environment.IP + 'activity/?category=&type=' + id)
      .subscribe();
  }

  deleteAllActivities() {
    this.http.delete('egasegageag4raEG.json')
      .subscribe();
  }
}
