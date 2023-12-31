import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';
import { COUNTRIES_LIST, USER_KEY } from 'src/app/shared/costants';
import { PasswordValidatorDirective } from './passwordValidators/password-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [PasswordValidatorDirective],
})
export class RegisterComponent {
  apiError: string = '';
  failedSubmit: boolean = false;
  loading: boolean = false;

  passwordVisibility: boolean = false;
  rePasswordVisibility: boolean = false;

  countries: string[] = COUNTRIES_LIST;

  formData: {
    email: string;
    username: string;
    country: string;
    gender: string;
  } = {
    email: '',
    username: '',
    country: '',
    gender: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    if (form.invalid || form.value.password !== form.value.rePassword) {
      this.failedSubmit = true;
      return;
    }

    this.apiError = '';

    this.loading = true;

    const { email, username, password, country, gender } = form.value;
    this.formData = form.value;

    this.userService
      .register(email, username, password, country, gender)
      .subscribe({
        next: (user) => {
          localStorage.setItem(USER_KEY, user.accessToken);
          this.router.navigate(['/dest/list/user']);
        },
        error: (err) => {
          this.loading = false;
          if (err.status === 409) {
            console.log(err);

            this.apiError = err.error?.errors[0];
            window.scroll(0, 0);
            return;
          }
          this.userService.clearUser();
          throw err;
        },
      });
  }

  togglePasswordVisibility() {
    console.log(this.passwordVisibility);

    this.passwordVisibility = !this.passwordVisibility;
  }

  toggleRePasswordVisibility() {
    console.log(this.rePasswordVisibility);

    this.rePasswordVisibility = !this.rePasswordVisibility;
  }
}
