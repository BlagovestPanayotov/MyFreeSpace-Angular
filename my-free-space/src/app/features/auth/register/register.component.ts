import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { NgForm } from '@angular/forms';
import { USER_KEY } from 'src/app/shared/costants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
