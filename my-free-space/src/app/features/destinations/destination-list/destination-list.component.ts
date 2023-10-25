import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationListComponent implements OnInit {
  list: IDestination[] = [];
  // page: number = this.searchService.getAllListPage;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;

  constructor(
    private destinationService: DestinationService,
    // private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      const name = p['name'] || '';
      const country = p['country'] || '';

      console.log(name);
      console.log(country);
      

      this.destinationService
        .getAllDestinations(name, country, 1)
        .subscribe((dest) => {
          this.list = dest;
          this.loading = false;
        });
    });
  }

  private getListDestinations(name: string, country: string) {
    return this.destinationService.getAllDestinations(name, country, 1);
  }

  increaseAllListPage() {
    // this.loading = true;
    // this.searchService.setAllListPage(this.page + 1);
  }

  decreaseAllListPage() {
    // this.loading = true;
    // this.searchService.setAllListPage(this.page - 1);
  }
}
