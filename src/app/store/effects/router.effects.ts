import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as RouterActions from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false })
  go$ = this.actions$.pipe(
    ofType(RouterActions.GO),
    tap(
      ({ payload: { path, query: queryParams, extras } }: RouterActions.Go) => {
        this.router.navigate(path, { queryParams, ...extras });
      }
    )
  );
}
