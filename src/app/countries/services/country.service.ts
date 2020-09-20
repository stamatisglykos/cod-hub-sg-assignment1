import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/country';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

  endpoint = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.endpoint);
  }
}
