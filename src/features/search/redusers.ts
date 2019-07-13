import { createReducer } from 'typesafe-actions';

import { searchUsersAsync, getUserByIdAsync, resetSelectedUser  } from './actions';
import { SearchState } from 'MyModels';

export const searchReducer = createReducer({isLoading: false, users: []} as SearchState)
  .handleAction(searchUsersAsync.request, (state, action) => {
      return {...state, isLoading: true}
  }).
  handleAction(searchUsersAsync.success, (state, action) => {
      return {...state, users: [...action.payload], isLoading: false};
  }).
  handleAction(getUserByIdAsync.success, (state, action) => {
    return {...state, selectedUser: {...action.payload}};
  })
  .handleAction(resetSelectedUser, (state, action) => {
    return {...state, selectedUser: undefined};
  });

export default searchReducer;
