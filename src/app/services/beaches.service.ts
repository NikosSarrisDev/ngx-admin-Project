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
  fetchBeach(categoryOfFilter: string, typeOfFilter: string) {
    return this.http.get<any>(environment.IP + 'beach/?category=' + categoryOfFilter + '&type=' + typeOfFilter)
      .pipe(map((res: BeachesListRequest) => res));
  }

  // categoryFilters = [
  //   {name: 'category', value: 'organised', title: 'Organised'},
  //   {name: 'category', value: 'discover', title: 'To Discover'},
  //   {name: 'category', value: 'boat', title: 'By Boat'}];
  //
  // typeFilters = [
  //   {name: 'type', value: 'sand', title: 'Sand'},
  //   {name: 'type', value: 'shingle', title: 'Pebble'}];

  fetchBeachByFilter(categoryOfFilter: string, typeOfFilter: string) {
    return this.http.get<any>(environment.IP + `beach/?category=${categoryOfFilter}&type=${typeOfFilter}`)
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
