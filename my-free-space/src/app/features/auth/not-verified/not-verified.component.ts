import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-not-verified',
  templateUrl: './not-verified.component.html',
  styleUrls: ['./not-verified.component.css'],
})
export class NotVerifiedComponent {
  loading: boolean = false;
  emailSent: boolean = false;
  apiError: string = '';

  constructor(private userService: UserService) {}

  sendVerificationEmail() {
    if (this.emailSent) {
      return;
    }
    this.emailSent = true;
    this.loading = true;

    this.userService.resendVerifyEmail().subscribe({
      next: () => {
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.apiError = err.error.errors.join('\n');
        this.loading = false;
      },
    });
  }
}
