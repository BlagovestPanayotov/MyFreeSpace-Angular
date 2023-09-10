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
    // Initialize the authentication state when the app starts
    this.userService.getUser().subscribe({
      next: (user) => {
        // Authentication is successful; user is logged in
        this.isAuthInitializing = false; // Set the flag to indicate initialization is complete
      },
      error: () => {
        // Authentication failed or user is not logged in
        this.isAuthInitializing = false; // Set the flag to indicate initialization is complete
      },
      complete: () => {
        // This block is executed when the observable completes
        // You can use it for any additional initialization
      },
    });
  }
}
