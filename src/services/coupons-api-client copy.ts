import { Coupon } from 'MyModels';

let coupons: Coupon[] = [
  { id: 0, title: 'Хабаровск -> Комсомольск-на-Амуре', used: false, userId: 0 },
  { id: 1, title: 'Хабаровск -> Биробиджан', used: false, userId: 1 },
  { id: 2, title: 'Хабаровск -> Комсомольск-на-Амуре', used: false, userId: 2 },
  { id: 3, title: 'Хабаровск -> Комсомольск-на-Амуре', used: false, userId: 3 },
  { id: 4, title: 'Хабаровск -> Биробиджан', used: true, userId: 0 },
  { id: 5, title: 'Хабаровск -> Комсомольск-на-Амуре', used: true, userId: 1 },
  { id: 6, title: 'Хабаровск -> Комсомольск-на-Амуре', used: true, userId: 2 },
  { id: 7, title: 'Хабаровск -> Биробиджан', used: false, userId: 0 },
];

export function loadCoupons(userId: number): Promise<Coupon[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(coupons.filter(x => x.userId == userId));
    }, 1000);
  });
}
