import { User } from 'MyModels';

let users: User[] = [
  { id: 0, fio: 'Жильников Павел Игоревич', age: 34, city: 'Хабаровск' },
  { id: 1, fio: 'Жильников Павел1 Игоревич', age: 34, city: 'Владивосток' },
  { id: 2, fio: 'Жильников Павел2 Игоревич',age: 34, city: 'Хабаровск' },
  { id: 3, fio: 'Жильников Павел3 Игоревич',age: 34, city: 'Владивосток' },
  { id: 4, fio: 'Жильников Павел4 Игоревич',age: 34, city: 'Хабаровск' },
  { id: 5, fio: 'Николаев Сергей',age: 34, city: 'Владивосток' },
];

export function searchUsers(query: string): Promise<User[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.filter(x=>x.fio.toLowerCase().indexOf(query.toLowerCase()) >= 0));
    }, 1000);
  });
}

export function getUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.find(x=>x.id == id));
    }, 100);
  });
}
