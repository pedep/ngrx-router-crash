import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { State, selectUserData, selectUserFetched, selectUserState } from '../reducers';

import { Observable, combineLatest } from 'rxjs';
import { tap, map, filter, take } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest(
      this.store.pipe(select(selectUserData)),
      this.store.pipe(select(selectUserFetched))
    ).pipe(
      filter(([user, fetched]) => !!user && fetched),
      take(1),
      map(() => false),
      tap(() => this.router.navigate(['/user', 'sign_in']))
    );
  }

  constructor(
    private router: Router,
    private store: Store<State>,
  ) {
    this.store.pipe(
      select(selectUserData),
    ).subscribe(console.log)
  }
}
