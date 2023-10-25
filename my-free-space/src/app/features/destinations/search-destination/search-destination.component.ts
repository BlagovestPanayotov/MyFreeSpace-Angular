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

    // this.serachService.setParams(name, country);
    // this.serachService.setAllListPage(1);
    // this.serachService.setUserListPage(1);

    // if (this.router.url === '/dest/user-list') {
    //   this.router.navigate([`/dest/user-list`]);
    //   return;
    // }

    this.router.navigate(['/dest/posts-list'], {
      queryParams: { name, country },
    });
  }

  clearSearch(form: NgForm): void {
    form.resetForm({ name: '', country: '' });
    // this.serachService.clearSearch();
    // this.serachService.setAllListPage(1);
    // this.serachService.setUserListPage(1);

    this.router.navigate(['/dest/posts-list']);
  }
}
