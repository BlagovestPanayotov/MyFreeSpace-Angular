import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userId = this.activatedRoute.snapshot.params['userId'];

  list: IDestination[] = [];
  userAccountName: string = '';
  // page: number = this.searchService.getUserListPage;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;

  constructor(
    private destinationService: DestinationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.destinationService
      .getUserDestinations(this.userId, 0)
      .subscribe((list) => {
        this.list = list;
        if (list.length > 0) {
          this.userAccountName = list[0].ownerInfo.accountName;
        }
        this.loading = false;
      });
  }

  // increaseUserListPage() {
  //   this.loading = true;
  //   this.searchService.setUserListPage(this.page + 1);
  // }

  // decreaseUserListPage() {
  //   this.loading = true;
  //   this.searchService.setUserListPage(this.page - 1);
  // }
}
