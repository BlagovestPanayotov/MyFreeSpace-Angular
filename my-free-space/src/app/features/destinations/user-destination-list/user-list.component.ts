import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, combineLatest, switchMap } from 'rxjs';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  list: IDestination[] = [];
  page: number = this.searchService.getUserListPage;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.searchService.params$.subscribe(() => {
      this.loading = true;
    });
    this.subscribeToMultipleObservables();
  }

  subscribeToMultipleObservables(): void {
    const searchObs = this.searchService.params$;
    const userPageObs = this.searchService.userListPage$;
    this.loading = true;

    this.subscription = combineLatest([userPageObs, searchObs])
      .pipe(
        switchMap(([pN, data]) => {
          this.page = pN;
          this.loading = true;

          return this.userService.getUser().pipe(
            switchMap((user) => {
              return combineLatest([
                this.getListCount(user._id, data.name, data.country),
                this.getListDestinations(user._id, data.name, data.country),
              ]);
            })
          );
        })
      )
      .subscribe(([count, destinations]) => {
        this.list = destinations;
        this.countDest = count;
        this.lastPage = Math.ceil(count / 9);
        this.loading = false;
      });
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
    this.loading = true;
    this.searchService.setUserListPage(this.page + 1);
  }

  decreaseUserListPage() {
    this.loading = true;
    this.searchService.setUserListPage(this.page - 1);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
