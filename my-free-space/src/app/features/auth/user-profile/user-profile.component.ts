import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { IUserNotOwner } from 'src/app/shared/types/userNotOwner';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

   id = this.activatedRoute.snapshot.params['userId'];

  user: IUserNotOwner = {
    _id: '',
    country: '',
    gender: '',
    accountName: '',
    verified: false,
    imgUrl: '',
  };
  loading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserById(this.id);
  }

  getUserById(userId: string): void {
    this.loading = true;
    this.userService.getUserById(userId).subscribe({
      next: (u: IUserNotOwner) => {
        if (u) {
          this.user = u;
          this.loading = false;
        } else {
          this.loading = false;
        }
      },
      error: (err) => {
        console.log(err);

        // this.router.navigate(['/not-found']);
      },
    });
  }
}
