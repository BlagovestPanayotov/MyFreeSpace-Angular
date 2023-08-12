import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';
import { USER_KEY } from 'src/app/shared/costants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  apiError: string = '';
  failedSubmit: boolean = false;
  loading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(from: NgForm): void {
    if (from.invalid) {
      this.failedSubmit = true;
      return;
    }

    const { emailLogin, passwordLogin } = from.value;

    this.loading = true;

    this.userService.login(emailLogin, passwordLogin).subscribe({
      next: (user) => {
        localStorage.setItem(USER_KEY, user.accessToken);
        this.router.navigate(['/dest/user-list']);
        this.loading = false;
      },
      error: (err) => {
        console.log(err);

        if (
          err.error.code === 403 &&
          err.error.message === "Login or password don't match"
        ) {
          this.apiError = err.error?.message || '';
          this.loading = false;
        } else {
          this.loading = false;
          throw err;
        }
      },
    });
  }
}
