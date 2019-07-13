declare module 'MyModels' {
    export type Coupon = {
      id: number;
      title: string;
      used: boolean;
      userId: number;
    };

    export type CouponState = {
      isLoading: boolean;
      coupons: Coupon[];
    }
  }