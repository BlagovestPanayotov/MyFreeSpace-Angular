import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  get userThumb(): string {
    return this.userService.getThumb;
  }

  get userGender(): string {
    return this.userService.getGender;
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
