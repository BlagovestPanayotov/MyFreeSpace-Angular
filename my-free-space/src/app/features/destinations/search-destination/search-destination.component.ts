import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.component.html',
  styleUrls: ['./search-destination.component.css'],
})
export class SearchDestinationComponent {
  countries: string[] = COUNTRIES_LIST;

  constructor(private serachService: SearchService, private router: Router) {}

  getParams(form: NgForm): void {
    const { name, country } = form.value;

    this.router.navigate(['/dest/list/all'], {
      queryParams: { name, country },
    });
  }

  clearSearch(form: NgForm): void {
    form.resetForm({ name: '', country: '' });
    
    this.router.navigate(['/dest/list/all']);
  }
}
