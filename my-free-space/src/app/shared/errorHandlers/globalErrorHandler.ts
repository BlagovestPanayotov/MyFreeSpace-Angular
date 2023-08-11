import { ErrorHandler, Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { USER_KEY } from '../costants';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private router: Router) {}

  handleError(error: any): void {
    console.error(error);
    if (
      error.status === 403 &&
      error.error.message === 'Invalid access token'
    ) {
      localStorage.removeItem(USER_KEY);
      this.router.navigate(['/home']);
      return;
    }

    this.router.navigate(['/error']);
  }
}

export const GlobalErrorHandlerProvider: Provider = {
  useClass: GlobalErrorHandler,
  provide: ErrorHandler,
};
