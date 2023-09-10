import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  of,
  tap,
} from 'rxjs';

import { IUser } from '../types/user';
import { userEndpoints } from './endpoits';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: IUser | undefined;

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  get getGender(): string {
    return this.user?.gender || '';
  }

  login(email: string, password: string) {
    return this.http
      .post<IUser>(userEndpoints.login, { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(
    email: string,
    username: string,
    password: string,
    country: string,
    gender: string
  ) {
    return this.http
      .post<IUser>(userEndpoints.register, {
        email,
        username,
        password,
        country,
        gender,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .get(userEndpoints.logout)
      .pipe(tap(() => this.clearUser()));
  }

  getUser() {
    return this.http.get<IUser | undefined>(userEndpoints.getUser).pipe(
      tap((user) => this.user$$.next(user)),
      catchError((err) => {
        this.user$$.next(undefined);
        return of(undefined);
      })
    );
  }

  clearUser() {
    this.user$$.next(undefined);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
