import { Injectable, OnDestroy } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';
import { ISearch } from '../types/search';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements OnDestroy {
  private params$$ = new BehaviorSubject<ISearch>({
    name: '',
    country: '',
  });
  public params$ = this.params$$.asObservable();

  private userListPage$$ = new BehaviorSubject<number>(1);
  public userListPage$ = this.userListPage$$.asObservable();

  private allListPage$$ = new BehaviorSubject<number>(1);
  public allListPage$ = this.allListPage$$.asObservable();

  params: ISearch = {
    name: '',
    country: '',
  };
  userListPage: number = 1;
  allListPage: number = 1;

  paramsSubscription: Subscription;
  userListPageSubscription: Subscription;
  allListPageSubscription: Subscription;

  constructor() {
    this.paramsSubscription = this.params$.subscribe((par) => {
      this.params = par;
    });
    this.userListPageSubscription = this.userListPage$.subscribe((pN) => {
      this.userListPage = pN;
    });
    this.allListPageSubscription = this.allListPage$.subscribe((pN) => {
      this.allListPage = pN;
    });
  }

  get getParams(): ISearch {
    return this.params;
  }

  get getUserListPage(): number {
    return this.userListPage;
  }

  setUserListPage(page: number) {
    this.userListPage$$.next(page);
    console.log(this.userListPage);
    
  }

  setParams(nameInput: string, countryInput: string) {
    this.params$$.next({ name: nameInput, country: countryInput });
  }

  clearSearch() {
    this.params$$.next({ name: '', country: '' });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.userListPageSubscription.unsubscribe();
    this.allListPageSubscription.unsubscribe();
  }
}
