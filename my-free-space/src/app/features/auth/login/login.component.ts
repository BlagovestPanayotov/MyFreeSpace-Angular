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
  public apiError: string = '';
  public failedSubmit:boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(from: NgForm): void {
    if (from.invalid) {
      this.failedSubmit = true
      return;
    }

    const { email, password } = from.value;

    console.log(from.form.controls);

    this.userService.login(email, password).subscribe({
      next(user) {
        localStorage.setItem(USER_KEY,user.accessToken)
      },
      error: (err) => {
        this.apiError = err.error?.message || '';
      },
    });
  }
}
