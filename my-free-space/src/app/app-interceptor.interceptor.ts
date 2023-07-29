import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { USER_KEY } from './shared/costants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  userToken: string | null = null;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.userToken = localStorage.getItem(USER_KEY);
    
    if (this.userToken) {
      request = request.clone({
        setHeaders: {
          'X-Authorization': this.userToken,
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request);
  }
}

export const AppInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
};
