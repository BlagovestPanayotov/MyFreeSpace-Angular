import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, mergeMap, tap } from 'rxjs';

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

  login(email: string, password: string) {
    return this.http.post<IUser>(userEndpoints.login, { email, password });
  }

  register(
    email: string,
    username: string,
    password: string,
    country: string,
    gender: string
  ) {
    return this.http.post<IUser>(userEndpoints.register, {
      email,
      username,
      password,
      country,
      gender,
    });
  }

  logout() {
    return this.http.get(userEndpoints.logout);
  }

  getUser() {
    return this.http.get(userEndpoints.getUser);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
