import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

import { IUser } from '../types/user';
import { userEndpoints } from './endpoits';
import { USER_KEY } from '../costants';
import { IUserVerify } from '../types/userVerify';
import { IUserNotOwner } from '../types/userNotOwner';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  private userVerify$$ = new BehaviorSubject<IUserVerify | undefined>(
    undefined
  );
  public userVerify$ = this.userVerify$$.asObservable();

  user: IUser | undefined;
  userVerify: IUserVerify | undefined;

  subscriptionUser: Subscription;
  subscriptionUserVerify: Subscription;

  constructor(private http: HttpClient) {
    this.subscriptionUser = this.user$.subscribe((user) => {
      this.user = user;
    });

    this.subscriptionUserVerify = this.userVerify$.subscribe((user) => {
      this.userVerify = user;
    });
  }

  get isLogged(): boolean {
    return !!this.userVerify;
  }

  get getThumb(): string {
    return this.userVerify?.thumbUrl || '';
  }

  get getGender(): string {
    return this.userVerify?.gender || '';
  }

  login(email: string, password: string) {
    return this.http.post<IUser>(userEndpoints.login, { email, password }).pipe(
      tap((user) => {
        const {
          _id,
          accountName,
          gender,
          verified,
          image: { thumbUrl },
        } = user;
        this.userVerify$$.next({
          _id,
          accountName,
          gender,
          verified,
          thumbUrl,
        });
        this.user$$.next(user);
      })
    );
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
      .pipe(
        tap((user) => {
          const {
            _id,
            accountName,
            gender,
            verified,
            image: { thumbUrl },
          } = user;
          this.userVerify$$.next({
            _id,
            accountName,
            gender,
            verified,
            thumbUrl,
          });
          this.user$$.next(user);
        })
      );
  }

  updateUser(formData: FormData) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');

    return this.http
      .put<IUser>(userEndpoints.getUser, formData, { headers: headers })
      .pipe(
        tap((user) => {
          const {
            _id,
            accountName,
            gender,
            verified,
            image: { thumbUrl },
          } = user;
          this.userVerify$$.next({
            _id,
            accountName,
            gender,
            verified,
            thumbUrl,
          });
          this.user$$.next(user);
        })
      );
  }

  logout() {
    return this.http
      .get(userEndpoints.logout)
      .pipe(tap(() => this.clearUser()));
  }

  verifyEmail(verificationToken: string) {
    return this.http.get(userEndpoints.verifyEmail(verificationToken));
  }

  getUser() {
    return this.http
      .get<IUser | undefined>(userEndpoints.getUser)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getUserById(userId: string) {
    return this.http.get<IUserNotOwner>(userEndpoints.getUserById(userId));
  }

  resendVerifyEmail() {
    return this.http.get(userEndpoints.resendVerifyEmail);
  }

  getUserVerify() {
    return this.http
      .get<IUserVerify | undefined>(userEndpoints.getUserVerify)
      .pipe(tap((user) => this.userVerify$$.next(user)));
  }

  clearUser() {
    localStorage.removeItem(USER_KEY);
    this.user$$.next(undefined);
    this.userVerify$$.next(undefined);
  }

  ngOnDestroy(): void {
    this.subscriptionUser.unsubscribe();
    this.subscriptionUserVerify.unsubscribe();
  }
}
