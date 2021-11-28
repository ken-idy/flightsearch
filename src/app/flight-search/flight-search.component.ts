import { BehaviorSubject, Observable } from 'rxjs';
import { Flights } from './flights.model';
import { flightSearchService } from './flight-search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  flights: Flights[] = [];
  aankomstLocatie: any;
  vetrekLocatie: any;

  constructor(public flightservice: flightSearchService) {}

  ngOnInit(): void {
    this.flightservice.getFlights().subscribe((data) => {
      this.flights = data;
    });
  }

  onSubmit(f: NgForm) {
    this.flights = this.flights.filter((flightservice) => {
      return (
        flightservice.vetrekLocatie &&
        flightservice.aankomstLocatie
          .toLocaleLowerCase()
          .match(this.vetrekLocatie && this.aankomstLocatie.toLocaleLowerCase())
      );
    });
    console.log(f);
  }
}
