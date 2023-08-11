import { ErrorHandler, Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { USER_KEY } from '../../shared/costants';
import { UserService } from '../../shared/services/user.service';
import { SearchService } from '../../shared/services/searchParams.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private router: Router,
    private userService: UserService,
    private searchService: SearchService
  ) {}

  handleError(error: any): void {
    console.error(error.status);
    if (error.status === 403 || error.status === 401) {
      localStorage.removeItem(USER_KEY);
      this.searchService.clearSearch();
      this.userService.clearUser();
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}

export const GlobalErrorHandlerProvider: Provider = {
  useClass: GlobalErrorHandler,
  provide: ErrorHandler,
};
