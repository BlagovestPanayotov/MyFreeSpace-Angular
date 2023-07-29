import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_KEY } from 'src/app/shared/costants';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.logout().subscribe({
      next: () => {
        localStorage.removeItem(USER_KEY);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
        localStorage.removeItem(USER_KEY);
        this.router.navigate(['/home']);
      },
      complete: () => {
        localStorage.removeItem(USER_KEY);
        this.router.navigate(['/home']);
      },
    });
  }
}
