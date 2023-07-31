import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';
import { USER_KEY } from 'src/app/shared/costants';
import { HasLowerCaseDirective } from './passwordValidators/has-lower-case.directive';
import { HasNumericDirective } from './passwordValidators/has-numeric-case.directive';
import { HasUpperCaseDirective } from './passwordValidators/has-upper-case.directive';
import { HasSpecCharDirective } from './passwordValidators/has-spec-char.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[HasLowerCaseDirective,HasNumericDirective,HasUpperCaseDirective,HasSpecCharDirective]
})
export class RegisterComponent {
  public apiError: string = '';
  public failedSubmit: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    if (form.invalid || form.value.password !== form.value.rePassword) {
      this.failedSubmit = true;
      return;
    }

    const { email, username, password,country, gender } =
      form.value;
    console.log(form.value);

    this.userService
      .register(email, username, password, country, gender)
      .subscribe({
        next: (user) => {
          localStorage.setItem(USER_KEY, user.accessToken);
          this.router.navigate(['/dest/posts-list']);
        },
        error: (err) => {
          this.apiError = err.error?.message || '';
        },
      });
  }
}
