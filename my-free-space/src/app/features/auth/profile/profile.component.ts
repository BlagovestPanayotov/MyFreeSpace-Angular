import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | undefined;
  loading: boolean = true;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe({
      next: (u) => {
        this.user = u;
        this.loading = false;
      },
      error: (err) => {
        this.user = undefined;
        this.loading = false;
        throw err;
      },
    });
  }
}
