import { routerActions } from 'react-router-redux';
import * as couponActions from '../features/coupons/actions';
import * as searchActions from '../features/search/actions';
import * as flightActions from '../features/flights/actions';

export default {
  router: routerActions,
  coupons: couponActions,
  search: searchActions,
  flight: flightActions
};
