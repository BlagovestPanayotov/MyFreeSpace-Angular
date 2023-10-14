import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css'],
})
export class VerifiedComponent implements OnInit {
  token = this.activatedRoute.snapshot.params['token'];

  loading: boolean = true;
  apiError: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.verifyEmail(this.token).subscribe({
      next: () => {
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.apiError = err.error.errors[0];
      },
    });
  }
}
