import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private nominatimUrl = 'https://nominatim.openstreetmap.org/reverse';

  constructor(private http: HttpClient) { }

  reverseGeocode(lati: number, longi: number): Observable<string> {
    const url = `${this.nominatimUrl}?lat=${lati}&lon=${longi}&format=json`;

    return this.http.get(url).pipe(
      catchError((error: any) => {
        console.error('Error in reverse geocoding:', error);
        return throwError('Failed to reverse geocode');
      })
    );
  }
}
