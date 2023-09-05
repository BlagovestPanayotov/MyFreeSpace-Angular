import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css'],
})
export class CreateDestinationComponent {
  apiError: string = '';
  countries: string[] = COUNTRIES_LIST;

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService,
    private router: Router
  ) {}

  createDestination(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { name, country, description, img } = form.value;

    this.destinationService
      .createDestination(name, country, description, img)
      .subscribe({
        next: () => {
          this.router.navigate(['/dest/user-list']);
          this.searchService.setAllListPage(1);
          this.searchService.setUserListPage(1);
        },
        error: (err) => {
          this.apiError =
            'There is a problem and we are working on it. Sorry for the inconvenience.';
          window.scroll(0, 0);
        },
      });
  }
}
