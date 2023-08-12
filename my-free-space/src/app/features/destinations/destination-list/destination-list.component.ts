import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, combineLatest } from 'rxjs';

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
  page: number = 1;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscribeToMultipleObservables();
  }

  subscribeToMultipleObservables(): void {
    const serachObs = this.searchService.params$;
    const userPageObs = this.searchService.allListPage$;
    this.loading = true;
    this.page = this.searchService.getAllListPage;

    this.subscription = combineLatest([userPageObs, serachObs]).subscribe(
      ([pN, data]) => {
        
        {
          this.page = pN;
        }

        {
          combineLatest([
            this.getListCount(data.name, data.country),
            this.getListDestinations(data.name, data.country),
          ]).subscribe(([count, destinations]) => {
            this.list = destinations;
            this.countDest = count;
            this.lastPage = Math.ceil(count / 9);
            this.loading = false;
          });
        }

      }
    );
  }

  private getListCount(name: string, country: string) {
    return this.destinationService.getAllDestinationCount(name, country);
  }

  private getListDestinations(name: string, country: string) {
    console.log(this.page);

    return this.destinationService.getAllDestinations(name, country, this.page);
  }

  increaseUserListPage() {
    this.searchService.setAllListPage(this.page + 1);
  }

  decreaseUserListPage() {
    this.searchService.setAllListPage(this.page - 1);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
