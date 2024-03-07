import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CountryInfo, Location } from '../../assets/types/types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private http:HttpClient = inject(HttpClient);
  private url = 'https://photon.komoot.io/api/?q=';

  getCoordsByCountry(country: string) {
    return this.http.get<CountryInfo>(`${this.url}${country}`).pipe(
      map(countryInfoArray => (countryInfoArray.features.map(feature => feature.geometry.coordinates)[0]))
    );
  }
}
