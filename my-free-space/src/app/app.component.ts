import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-free-space';

  isAuthInitializing = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserVerify().subscribe({
      next: (user) => {
        this.isAuthInitializing = false;
      },
      error: () => {
        this.isAuthInitializing = false;
        this.userService.clearUser();
      },
      complete: () => {},
    });
  }
}
