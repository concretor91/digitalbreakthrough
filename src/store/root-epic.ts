import { combineEpics } from 'redux-observable';

import * as couponsEpics from '../features/coupons/epics';
import * as searchEpics from '../features/search/epics';
import * as flightEpics from '../features/flights/epics';

export default combineEpics(
 ...Object.values(couponsEpics),
 ...Object.values(searchEpics),
 ...Object.values(flightEpics));
