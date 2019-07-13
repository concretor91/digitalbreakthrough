import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import couponReducer from '../features/coupons/reducers';
import searchReducer from '../features/search/redusers';

const rootReducer = combineReducers({
  router: routerReducer,
  coupons: couponReducer,
  search: searchReducer
});

export default rootReducer;
