import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: IUser | undefined;
  loading: boolean = true;
  apiError: string = '';

  editMode: boolean = false;
  countries: string[] = COUNTRIES_LIST;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe({
      next: (u) => {
        this.user = u;
        this.loading = false;
      },
      error: (err) => {
        this.user = undefined;
        this.loading = false;
        throw err;
      },
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  editUser(form: NgForm) {
    if (form.invalid) {
      console.log(form.value);

      return;
    }

    this.loading = true;

    const { email, username, country, gender, accountname } = form.value;

    this.userService
      .updateUser(email, username, country, gender, accountname)
      .subscribe({
        next: (result) => {
          console.log(result);
          
          this.user = result;
          this.toggleEditMode();
          this.loading = false;
        },
        error: (err) => {
          if (err.status === 403 || err.status === 401) {
            window.scroll(0, 0);
            this.apiError = err.error.errors[0];
            this.loading = false;
            return;
          }
          throw err;
        },
      });
  }
}
