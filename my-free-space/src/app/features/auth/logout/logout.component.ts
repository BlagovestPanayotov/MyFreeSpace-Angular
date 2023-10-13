import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.userService.logout().subscribe(() => {
      this.userService.clearUser();
      this.router.navigate(['/home']);
      this.searchService.clearSearch();
    });
  }
}
