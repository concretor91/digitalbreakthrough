import { createAsyncAction, createAction } from 'typesafe-actions';
import { Coupon } from 'MyModels';

export const loadCouponsAsync = createAsyncAction(
    'loadCoupons/request',
    'loadCoupons/success',
    'loadCoupons/error'
)<number, Coupon[], undefined>();

export const resetCoupons = createAction('coupons/reset');

export const activateCoupon = createAction('coupons/activate', action => {
    return (id: number) => action(id);
});

