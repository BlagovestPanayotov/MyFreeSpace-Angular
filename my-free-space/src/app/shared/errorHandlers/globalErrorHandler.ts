import { ErrorHandler, Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private router: Router) {}

  handleError(error: any): void {
    console.error(error);

    this.router.navigate(['/error']);
  }
}

export const GlobalErrorHandlerProvider: Provider ={
  useClass: GlobalErrorHandler,
  provide: ErrorHandler,
}
