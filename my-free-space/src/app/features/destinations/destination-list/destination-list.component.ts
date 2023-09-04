import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest, switchMap } from 'rxjs';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css'],
})
export class DestinationListComponent implements OnInit, OnDestroy {
  list: IDestination[] = [];
  page: number = this.searchService.getAllListPage;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchService.params$.subscribe(() => {
      this.loading = true;
    });
    this.subscribeToMultipleObservables();
  }

  subscribeToMultipleObservables(): void {
    const searchObs = this.searchService.params$;
    const allListPageObs = this.searchService.allListPage$;
    this.loading = true;

    this.subscription = combineLatest([allListPageObs, searchObs])
      .pipe(
        switchMap(([pN, data]) => {
          this.page = pN;
          this.loading = true;

          return combineLatest([
            this.getListDestinations(data.name, data.country),
          ]);
        })
      )
      .subscribe(([destinations]) => {
        this.list = destinations;
        this.loading = false;
      });
  }

  private getListDestinations(name: string, country: string) {
    return this.destinationService.getAllDestinations(name, country, this.page);
  }

  increaseAllListPage() {
    this.loading = true;
    this.searchService.setAllListPage(this.page + 1);
  }

  decreaseAllListPage() {
    this.loading = true;
    this.searchService.setAllListPage(this.page - 1);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
