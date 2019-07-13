import { combineEpics } from 'redux-observable';

import * as couponsEpics from '../features/coupons/epics';
import * as searchEpics from '../features/search/epics';

export default combineEpics(
 ...Object.values(couponsEpics),
 ...Object.values(searchEpics));
