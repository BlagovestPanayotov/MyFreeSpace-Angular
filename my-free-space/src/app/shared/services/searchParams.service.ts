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

  params: ISearch = {
    name: '',
    country: '',
  };

  subscription: Subscription;

  constructor() {
    this.subscription = this.params$.subscribe((p) => {
      this.params = p;
    });
  }

  changeParams(nameInput: string, countryInput: string) {
    this.params$$.next({ name: nameInput, country: countryInput });
  }

  clearSearch() {
    this.params$$.next({ name: '', country: '' });
  }

  get getParams(): ISearch {
    return this.params;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
