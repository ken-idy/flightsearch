import { Flights } from './flights.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class flightSearchService {
  constructor(private http: HttpClient) {}

  url = `http://localhost:3000/Flights`;
  getFlights() {
    return this.http.get<Flights[]>(this.url);
  }
}
