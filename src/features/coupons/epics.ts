import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { loadCouponsAsync } from './actions';

export const loadCoupons: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadCouponsAsync.request)),
    switchMap(action =>
      from(api.coupons.loadCoupons(action.payload)).pipe(
        map(loadCouponsAsync.success),
        catchError((message: string) => of(loadCouponsAsync.failure()))
      )
    )
  );
