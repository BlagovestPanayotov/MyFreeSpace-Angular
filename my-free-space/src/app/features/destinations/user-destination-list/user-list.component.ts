import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IDestination } from 'src/app/shared/types/destination';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  list: IDestination[] = [];
  loading: boolean = true;

  constructor(
    private userService: UserService,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {
        this.destinationService.getUserDestinations(user._id).subscribe({
          next: (destinations) => {
            this.loading = false;
            this.list = destinations;
          },
        });
      },
    });
  }
}
