import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'sg-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  providers: [CountryService]
})
export class CountriesComponent implements OnInit {

  countries: Country[];

  constructor(private cs: CountryService) { }

  ngOnInit(): void {
    this.cs.getCountries().subscribe((countries: Country[]) => {
      this.countries = countries;
    });
  }

}
