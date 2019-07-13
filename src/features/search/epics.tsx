import { Epic } from 'redux-observable';
import { from, of, iif } from 'rxjs';
import { filter, switchMap, map, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { searchUsersAsync, getUserByIdAsync } from './actions';

export const searchUsers: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) =>
        action$.pipe(
            filter(isActionOf(searchUsersAsync.request)),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((action) =>
                iif(() => action.payload.length == 0, of(searchUsersAsync.success([])),
                    from(api.users.searchUsers(action.payload)).pipe(
                        map(searchUsersAsync.success),
                        catchError((message: string) => of(searchUsersAsync.failure()))
                    )
                )
            )
        );

export const getUserByIdEpic: Epic<
    RootAction,
    RootAction,
    RootState,
    Services
> = (action$, state$, { api }) =>
        action$.pipe(
            filter(isActionOf(getUserByIdAsync.request)),
            switchMap(action =>
                from(api.users.getUser(action.payload)).pipe(
                    map(getUserByIdAsync.success),
                    catchError((message: string) => of(getUserByIdAsync.failure()))
                )
            )
        );
