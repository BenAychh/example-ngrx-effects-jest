import * as fromActions from './router.actions';

describe('Router Actions', () => {
  it('creates the Go action', () => {
    const payload = {
      path: ['some', 'path'],
      query: {},
    };
    const result = new fromActions.Go(payload);
    expect({ ...result }).toEqual({
      payload,
      type: fromActions.GO,
    });
  });

  it('creates the Back action', () => {
    const result = new fromActions.Back();
    expect({ ...result }).toEqual({ type: fromActions.BACK });
  });

  it('creates the Forward action', () => {
    const result = new fromActions.Forward();
    expect({...result}).toEqual({ type: fromActions.FORWARD });
  })
});
