import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { searchFlightsAsync } from './actions';

export const searchFlightEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(searchFlightsAsync.request)),
    switchMap(action =>
      from(api.flights.loadFlights('test', 'test', '14.07.2019')).pipe(
        map(searchFlightsAsync.success),
        catchError((message: string) => of(searchFlightsAsync.failure()))
      )
    )
  );
