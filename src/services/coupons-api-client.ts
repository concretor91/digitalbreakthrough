import { Coupon } from 'MyModels';

let coupons: Coupon[] = [
  { id: 0, title: 'Скидка 50% на перелет по Хабаровскому краю', used: false, userId: 0 },
  { id: 1, title: 'Скидка 50% на перелет по Хабаровскому краю', used: false, userId: 1 },
  { id: 2, title: 'Скидка 50% на перелет по Хабаровскому краю', used: false, userId: 2 },
  { id: 3, title: 'Скидка 50% на перелет по Хабаровскому краю', used: false, userId: 3 },
  { id: 4, title: 'Скидка 50% на перелет по Хабаровскому краю', used: true, userId: 0 },
  { id: 5, title: 'Скидка 50% на перелет по Хабаровскому краю', used: true, userId: 1 },
  { id: 6, title: 'Скидка 50% на перелет по Хабаровскому краю', used: true, userId: 2 },
  { id: 7, title: 'Скидка 50% на перелет по Хабаровскому краю', used: false, userId: 0 },
];

export function loadCoupons(userId: number): Promise<Coupon[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(coupons.filter(x => x.userId == userId));
    }, 1000);
  });
}
