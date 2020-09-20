import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CountriesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [CountriesComponent]
})
export class CountriesModule { }
