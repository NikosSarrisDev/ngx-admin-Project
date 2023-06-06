import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BeachesListRequest} from '../_models/beaches.model';
// import { Beach } from 'nope';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeachesService {

  constructor(private http: HttpClient) {
  }

  createBeach(data: BeachesListRequest): Observable<any> {
    return this.http.post<any>(environment.IP + 'beach/?category=&type=', data);
  }

  // Get All Beaches
  fetchBeach() {
    return this.http.get<any>(environment.IP + 'beach/?category=&type=')
      .pipe(map((res: BeachesListRequest) => res));
  }

  EditBeach(data: BeachesListRequest, id: string) {
    return this.http.patch<any>(environment.IP + id, data);
  }

  deleteBeach(beachCode: string) {
    const endpoint = 'beach/' + beachCode;
    return this.http.delete<any>(environment.IP + endpoint);
  }

  deleteAllBeaches() {
    this.http.delete('egasegageag4raEG.json')
      .subscribe();
  }
}
