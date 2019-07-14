declare module 'MyModels' {
    export type Flight = {
      id: number;
      from: string;
      to: string;
      date: string;
    };

    export type SearchFlightState = {
      flights: Flightp[];
      isLoading: boolean;
    }
  }