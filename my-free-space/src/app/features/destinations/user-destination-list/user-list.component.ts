import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription, zip } from 'rxjs';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IDestination } from 'src/app/shared/types/destination';
import { ISearch } from 'src/app/shared/types/search';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  list: IDestination[] = [];
  page: number = 1;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscribeToMultipleObservables();
  }

  subscribeToMultipleObservables(): void {
    const serachObs = this.searchService.params$;
    const userPageObs = this.searchService.userListPage$;

    this.subscription = zip([serachObs, userPageObs]).subscribe(
      ([data, pN]) => {
        {
          this.loading = true;
          window.scroll(0, 0);
          this.userService.getUser().subscribe((user) => {
            zip([
              this.getListCount(user._id, data.name, data.country),
              this.getListDestinations(user._id, data.name, data.country),
            ]).subscribe(([count, destinations]) => {
              this.list = destinations;
              this.countDest = count;
              this.lastPage = Math.ceil(count / 9);
              this.loading = false;
            });

            // this.destinationService
            //   .getUserDestinations(user._id, data.name, data.country)
            //   .subscribe((destinations) => {
            //     this.list = destinations;
            //     this.loading = false;
            //   });
          });
        }
        {
          this.page = pN;
        }
        console.log('BOOM');
      }
    );
  }

  private getListCount(userId: string, name: string, country: string) {
    return this.destinationService.getUserDestinationCount(
      userId,
      name,
      country
    );
  }
  private getListDestinations(userId: string, name: string, country: string) {
    console.log(this.page);

    return this.destinationService.getUserDestinations(
      userId,
      name,
      country,
      this.page
    );
  }

  increaseUserListPage() {
    this.searchService.setUserListPage(this.page + 1);
    this.subscribeToMultipleObservables();
  }

  decreaseUserListPage() {
    this.searchService.setUserListPage(this.page - 1);
    this.subscribeToMultipleObservables();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
