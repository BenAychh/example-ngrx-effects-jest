import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';
import { Observable } from 'rxjs';
import * as fromActions from '../actions';
import { RouterEffects } from './router.effects';

export class TestRouter {
  navigate = jest.fn();
}

export function getRouter() {
  return new TestRouter();
}

describe('Router Effects', () => {
  let actions$: Observable<any>;
  let router: TestRouter;
  let effects: RouterEffects;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RouterEffects,
        provideMockActions(() => actions$),
        {
          provide: Router,
          useFactory: getRouter
        }
      ]
    });

    actions$ = TestBed.get(Actions);
    router = TestBed.get(Router);
    effects = TestBed.get(RouterEffects);
  });

  describe('go$', () => {
    test('should call router.navigate with the correct path', done => {
      const action = new fromActions.Go({ path: ['some', 'path'] });

      actions$ = hot('-a', { a: action });
      const expected = cold('-b', { b: action });

      effects.go$.subscribe(
        result => {
          console.log('inside subscribe?');
          expect(router.navigate).toHaveBeenCalled();
          console.log('after expect');
          done();
          console.log('after done?');
        },
        done,
        done
      );

      expect(effects.go$).toBeObservable(expected);
    });
  });
});
