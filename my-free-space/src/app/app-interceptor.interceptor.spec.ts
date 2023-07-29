import { TestBed } from '@angular/core/testing';

import { AppInterceptor } from './app-interceptor.interceptor';

describe('AppInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
