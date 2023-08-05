import { Component, OnDestroy, OnInit } from '@angular/core';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/searchParams.service';
import { IDestination } from 'src/app/shared/types/destination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationListComponent implements OnInit, OnDestroy {
  list: IDestination[] = [];
  loading: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscription = this.searchService.params$.subscribe((data) => {
      this.loading = true;

      this.destinationService
        .getAllDestinations(data.name, data.country)
        .subscribe({
          next: (dest) => {
            this.list = dest;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          },
        });
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
