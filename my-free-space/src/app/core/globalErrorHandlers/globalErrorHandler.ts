import { ErrorHandler, Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { SearchService } from '../../shared/services/search.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private router: Router,
    private userService: UserService,
    private searchService: SearchService
  ) {}

  handleError(error: any): void {
    console.error(error);
    if (error.status === 403 || error.status === 401) {
      this.userService.clearUser();
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
