import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import couponReducer from '../features/coupons/reducers';
import searchReducer from '../features/search/redusers';
import searchFlightReducer from '../features/flights/reducers';

const rootReducer = combineReducers({
  router: routerReducer,
  coupons: couponReducer,
  search: searchReducer,
  flight: searchFlightReducer
});

export default rootReducer;
