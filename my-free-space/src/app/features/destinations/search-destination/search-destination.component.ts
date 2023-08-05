import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { SearchService } from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.component.html',
  styleUrls: ['./search-destination.component.css'],
})
export class SearchDestinationComponent {
  countries: string[] = COUNTRIES_LIST;

  constructor(private serachService: SearchService) {}

  getParams(form: NgForm): void {
    const { name, country } = form.value;
    this.serachService.changeParams(name, country);
  }

  clearSearch(form: NgForm): void {
    form.resetForm({ name: '', country: '' });
    this.serachService.clearSearch();
  }
}
