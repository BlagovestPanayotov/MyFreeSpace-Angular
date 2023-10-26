import { Component, OnInit } from '@angular/core';

import { DestinationService } from 'src/app/shared/services/destination.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-user-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent implements OnInit {
  list: IDestination[] = [];
  // page: number = this.searchService.getUserListPage;
  countDest: number = 0;
  lastPage: number = 0;
  loading: boolean = true;

  constructor(
    private destinationService: DestinationService,
  ) {}

  ngOnInit(): void {
    this.destinationService.getOwnerDestinations(0).subscribe((list) => {
      this.list = list;
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
