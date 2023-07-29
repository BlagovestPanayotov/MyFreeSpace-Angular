import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  userGender: string = '';

  constructor(private userService: UserService) {
    userService.getUser().subscribe({
      next: (u) => {
        this.userGender = u.gender;
      },
      error: (err) => {
        this.userGender = '';
      },
    });
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
