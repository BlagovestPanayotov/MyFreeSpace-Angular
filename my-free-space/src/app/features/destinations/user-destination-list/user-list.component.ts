import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/searchParams.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  list: IDestination[] = [];
  loading: boolean = true;
  private subscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private destinationService: DestinationService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscription = this.searchService.params$.subscribe((data) => {
      this.loading = true;

      window.scroll(0, 0);
      this.userService.getUser().subscribe({
        next: (user) => {
          this.destinationService
            .getUserDestinations(user._id, data.name, data.country)
            .subscribe({
              next: (destinations) => {
                this.loading = false;
                this.list = destinations;
              },
              error: (err) => {
                this.loading = false;
              },
            });
        },
        error: (err) => {
          this.loading = false;
          throw err;
        },
      });
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
