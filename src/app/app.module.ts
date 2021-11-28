import { flightSearchService } from './flight-search/flight-search.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FlightSearchComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule],
  providers: [flightSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
