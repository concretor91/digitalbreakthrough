import { Flight } from 'MyModels';

let flights: Flight[] = [
  { id: 0, from: 'Хабаровск', to: 'Комсомольск', date: '14.07.2019' },
  { id: 1, from: 'Хабаровск', to: 'Комсомольск', date: '14.07.2019' },
  { id: 2, from: 'Хабаровск', to: 'Комсомольск', date: '14.07.2019' },
  { id: 3, from: 'Хабаровск', to: 'Комсомольск', date: '14.07.2019' },
];

export function loadFlights(from: string, to: string, date: string): Promise<Flight[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(flights.filter(x => x.from == from && x.to == to && x.date == date));
    }, 1000);
  });
}
