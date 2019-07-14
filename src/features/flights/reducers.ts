import { createReducer } from 'typesafe-actions';

import { searchFlightsAsync  } from './actions';
import { SearchFlightState } from 'MyModels';

export const searchFlightReducer = createReducer({isLoading: false, flights: []} as SearchFlightState)
  .handleAction(searchFlightsAsync.request, (state, action) => {
      return {...state, isLoading: true}
  }).
  handleAction(searchFlightsAsync.success, (state, action) => {
      return {...state, flights: [...action.payload], isLoading: false};
  });

export default searchFlightReducer;
