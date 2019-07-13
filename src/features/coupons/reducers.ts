import { createReducer } from 'typesafe-actions';

import { loadCouponsAsync, resetCoupons, activateCoupon, } from './actions';
import { CouponState } from 'MyModels';

export const couponReducer = createReducer({ isLoading: false, coupons: [] } as CouponState)
  .handleAction(loadCouponsAsync.request, (state, action) => {
    return { ...state, isLoading: true }
  }).handleAction(loadCouponsAsync.success, (state, action) => {
    return { ...state, coupons: [...action.payload], isLoading: false }
  }).handleAction(resetCoupons, (state, action) => {
    return { ...state, coupons: [] };
  }).handleAction(activateCoupon, (state, action) => {
    let newCoupons = state.coupons.map(x => {
      let coupon = { ...x };

      if (coupon.id == action.payload)
        coupon.used = true;

      return coupon;
    })
    return { ...state, coupons: newCoupons }
  });

export default couponReducer;
